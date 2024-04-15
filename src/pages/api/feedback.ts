import  {  type APIRoute } from "astro";
import { Resend } from 'resend';

const resend = new Resend('re_9hk428QJ_BHBDyMytMBJYHSpeN7CL4d15');

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const name = data.get("first-names");
    const apellido = data.get("last-name")
    const cedula = data.get("cedula");
    const phone = data.get("phone");
    const email = data.get("email");
    const address = data.get("address");
    const address2 = data.get("address2");
    const city = data.get("city")
    const state = data.get("state");
    const country = data.get("country");
    const social = data.get("social-network");

    
    // Valida los datos - probablemente querrás hacer más que esto
    if (!name || !apellido) {
        return new Response(
            JSON.stringify({
                message: "Faltan campos requeridos",
            }),
            { status: 400 }
        );
    }
    
    // Construye el contenido del correo electrónico con los datos del formulario
    const emailContent = `
    <p><strong>Nombre:</strong> ${name} ${apellido}</p>
    <p><strong>Cédula:</strong> ${cedula}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Dirección:</strong> ${address}</p>
    <p><strong>Dirección 2:</strong> ${address2}</p>
    <p><strong>Ciudad:</strong> ${city}</p>
    <p><strong>Estado / Provincia / Región:</strong> ${state}</p>
    <p><strong>País:</strong> ${country}</p>
    <p><strong>Vía de conocimiento:</strong> ${social}</p>
      
    `;

    // Envía el correo electrónico
    const { data: emailData, error } = await resend.emails.send({
        from: 'informacion@coopdepa.com',
        to: ['informacion@coopdepa.com'],
        subject: 'Nuevo cliente',
        html: emailContent,
    });

    if (error) {
        console.error({ error });
        // Si hay un error en el envío del correo, puedes manejarlo aquí
        return new Response(
            JSON.stringify({
                message: "Error al enviar el correo electrónico",
            }),
            { status: 500 }
        );
    } else {
        console.log({ emailData });
        // Si el correo se envía correctamente, puedes manejarlo aquí
    }

    // Devuelve una respuesta de éxito
    return new Response(
        JSON.stringify({
            message: "¡Éxito! El correo electrónico ha sido enviado correctamente.",
        }),
        { status: 200 }
    );
};



