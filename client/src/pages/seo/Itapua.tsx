import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function SoftwareItapua() {
  return (
    <Layout>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Soluciones de Software en Itapúa para el Crecimiento Empresarial
        </h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            ¿Buscas el mejor <strong>software en Itapúa</strong>? En SoftwarePar desarrollamos herramientas digitales que transforman la productividad de las empresas en todo el departamento. Nuestra oferta de <strong>software en Itapúa</strong> abarca desde facturación electrónica hasta aplicaciones personalizadas.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Como expertos en <strong>software en Itapúa</strong>, conocemos los desafíos de la región y diseñamos soluciones robustas que funcionan en cualquier entorno. Si tu empresa está en Encarnación, Carlos Antonio López o Mayor Otaño, nuestro <strong>software en Itapúa</strong> es la respuesta que necesitas.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            El <strong>software en Itapúa</strong> de SoftwarePar destaca por su facilidad de integración y seguridad. Ayudamos a los negocios locales a cumplir con normativas de la SET mediante módulos de facturación electrónica integrados en nuestro <strong>software en Itapúa</strong>.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Invertir en <strong>software en Itapúa</strong> es invertir en el futuro de tu negocio. Brindamos capacitación y soporte constante para asegurar que aproveches al máximo cada funcionalidad de nuestro <strong>software en Itapúa</strong>, adaptándonos a la evolución de tu empresa.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Contáctanos para descubrir cómo nuestro <strong>software en Itapúa</strong> puede potenciar tu competitividad en el mercado paraguayo. Estamos orgullosos de ser referentes de <strong>software en Itapúa</strong>.
          </p>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Button size="lg" onClick={() => window.location.href = '/#contacto'}>
            Más Información
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
