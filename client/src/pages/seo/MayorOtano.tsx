import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function MayorOtano() {
  return (
    <Layout>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Sistemas en Mayor Otaño: Digitalización y Eficiencia
        </h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            SoftwarePar es líder en la implementación de <strong>sistemas en Mayor Otaño</strong>, ayudando a consultorios y empresas a automatizar sus procesos. Si necesitas optimizar la gestión de tu negocio, nuestros <strong>sistemas en Mayor Otaño</strong> ofrecen herramientas avanzadas de turnos online y control administrativo.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Entendemos el mercado de Itapúa y específicamente las demandas de <strong>sistemas en Mayor Otaño</strong>. Por ello, nuestras soluciones son escalables y fáciles de usar, permitiendo que cualquier emprendimiento en Mayor Otaño pueda profesionalizarse sin complicaciones técnicas.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            La adopción de <strong>sistemas en Mayor Otaño</strong> permite a los profesionales locales ahorrar tiempo y mejorar la atención al cliente. Ya sea un sistema de citas médicas o una plataforma de inventario, en Mayor Otaño somos tu aliado tecnológico de confianza.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Ofrecemos soporte técnico presencial y remoto para todos nuestros <strong>sistemas en Mayor Otaño</strong>, garantizando que tu operación nunca se detenga. Mayor Otaño merece tecnología de primer nivel, y en SoftwarePar estamos comprometidos a entregarla.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Si buscas modernizar tu consultorio con los mejores <strong>sistemas en Mayor Otaño</strong>, contáctanos hoy mismo para un diagnóstico gratuito de tus necesidades tecnológicas en Itapúa.
          </p>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Button size="lg" onClick={() => window.location.href = '/#contacto'}>
            Consultar Ahora
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.open('https://wa.me/595985990046', '_blank')}>
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp
          </Button>
        </div>
      </div>
    </Layout>
  );
}
