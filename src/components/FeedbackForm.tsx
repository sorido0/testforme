import { useState, type FormEvent } from "react";


export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
   

    <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-20 scroll-mt-12">
    <div className="flex justify-center items-center">
        <div className="w-full max-w-2xl">
            <div className="text-center">
                <h1 className="text-4xl tracking-tight font-medium text-[#355b19] md:text-5xl font-display">Llena este formulario para hacerte socio</h1>
                <p className="text-gray-600">Llenar este formulario es el primer paso para acceder a todos los beneficios de ser parte de la familia COOPDEPA. Luego de que lo envíes, nuestro personal de bienvenida te contactará.</p>
                <p><span className="text-red-600">*</span> señala los campos obligatorios</p>
            </div>

            <div className="mt-8 justify-center">
                <form onSubmit={submit}className="w-96">
                    <label htmlFor="full-name" className="block mt-4 text-[#233a13] font-semibold">Nombre completo <span className="text-red-600">*</span></label>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first-names" className="block mt-4">Nombres</label>
                            <input type="text" id="first-names" name="first-names" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Angel" required />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block mt-4">Apellido</label>
                            <input type="text" id="last-name" name="last-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Soriano" required />
                        </div>
                    </div>
                    <label htmlFor="cedula" className="block mt-4 font-semibold">Cédula <span className="text-red-600">*</span></label>
                    <input type="text" id="cedula" name="cedula" pattern="[0-9]{3}-[0-9]{7}-[0-9]{1}" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="000-000000-0" />
                    
                    <label htmlFor="phone" className="block mt-4 font-semibold">Teléfono de casa o celular <span className="text-red-600">*</span></label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold" placeholder="809-000-0000" />
                    <label htmlFor="email" className="block mt-4">Email <span className="text-red-600">*</span></label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="informacion@coopdepa.com" />
                    <label htmlFor="address" className="block mt-4">Dirección <span className="text-red-600">*</span></label>
                    <input type="text" id="address" name="address" placeholder="Calle" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    <input type="text" id="address2" name="address2" placeholder="Dirección 2" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    <input type="text" id="city" name="city" placeholder="Ciudad" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    <label htmlFor="state" className="block mt-4">Estado / Provincia / Región</label>
                    <input type="text" id="state" name="state" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    <label htmlFor="country" className="block mt-4">País</label>
                    <input type="text" id="country" name="country" value="República Dominicana" readOnly className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    <label htmlFor="social-network" className="block mt-4 font-semibold">¿Por qué vía supiste de nosotros?</label>
                    <select id="social-network" name="social-network" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option value=""></option>
                        <option value="Facebook">Facebook</option>
                        <option value="TikTok">TikTok</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Twitter">Twitter</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="YouTube">YouTube</option>
                        <option value="Otra">Otra</option>
                    </select>
                    <label htmlFor="terms" className="block mt-4 font-semibold">Consentimiento <span className="text-red-600">*</span></label>
                    <label htmlFor="" className="block mt-4">Estoy de acuerdo con los Términos y Condiciones y la Política de Privacidad.</label> 
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded"> Enviar </button>
                </form>
            </div> 
        </div>
    </div>
</div>
    

  );
}