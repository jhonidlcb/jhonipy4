import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function CarlosAntonioLopez() {
  return (
    <Layout>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Desarrollo Web en Carlos Antonio López, Itapúa
        </h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            En SoftwarePar, nos especializamos en brindar soluciones de <strong>desarrollo web en Carlos Antonio López</strong> para empresas y emprendedores que buscan destacar en el entorno digital. Entendemos que cada negocio en Carlos Antonio López tiene necesidades únicas, por lo que ofrecemos sistemas personalizados que impulsan el crecimiento local.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Nuestros servicios de <strong>desarrollo web en Carlos Antonio López</strong> incluyen desde páginas web informativas hasta complejos sistemas de gestión para consultorios y comercios. Si buscas mejorar tu presencia online en Carlos Antonio López, Itapúa, nuestro equipo está listo para asesorarte con tecnología de vanguardia y soporte constante.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            La digitalización en Carlos Antonio López es fundamental para competir en el mercado actual. Por eso, creamos plataformas rápidas, seguras y optimizadas para dispositivos móviles, asegurando que tus clientes en Carlos Antonio López tengan la mejor experiencia al interactuar con tu marca.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Contamos con amplia experiencia trabajando con la comunidad de Carlos Antonio López, ofreciendo mantenimiento web y estrategias de posicionamiento SEO local. Confía en SoftwarePar para llevar tu proyecto de <strong>desarrollo web en Carlos Antonio López</strong> al siguiente nivel, con soluciones adaptadas a la realidad de Itapúa.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            ¿Listo para empezar tu proyecto de <strong>desarrollo web en Carlos Antonio López</strong>? Nuestro compromiso es con la excelencia y la satisfacción del cliente en cada rincón de Itapúa.
          </p>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Button size="lg" onClick={() => window.location.href = '/#contacto'}>
            Solicitar Presupuesto
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
