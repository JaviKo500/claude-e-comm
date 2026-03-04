import Link from "next/link";
import { Cpu } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white mb-4">
              <Cpu className="w-6 h-6 text-teal-400" />
              <span className="font-bold text-lg">TechStore</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Tu tienda de confianza para equipos de computación. Los mejores precios y garantía real.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Categorías</h4>
            <ul className="space-y-2 text-sm">
              {["Laptops", "PCs de Escritorio", "Monitores", "Teclados", "Mouse", "Auriculares"].map((c) => (
                <li key={c}>
                  <Link href="/products" className="hover:text-teal-400 transition-colors">{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Atención al cliente</h4>
            <ul className="space-y-2 text-sm">
              {["Centro de ayuda", "Política de devoluciones", "Seguimiento de pedidos", "Garantías", "Contacto"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-teal-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Empresa</h4>
            <ul className="space-y-2 text-sm">
              {["Acerca de", "Blog", "Trabaja con nosotros", "Términos y condiciones", "Privacidad"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-teal-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-zinc-700" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
          <span>© 2026 TechStore. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <span>💳 Visa</span>
            <span>💳 Mastercard</span>
            <span>💳 PayPal</span>
            <span>💳 Mercado Pago</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
