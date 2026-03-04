export default function AnnouncementBar() {
  return (
    <div className="bg-zinc-900 text-white text-xs py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <span className="hidden sm:block">🔒 Compras 100% seguras</span>
        <div className="flex items-center gap-6 mx-auto sm:mx-0">
          <span>🚚 Envío gratis en compras +$999</span>
          <span className="hidden md:block">|</span>
          <span className="hidden md:block">↩ Devoluciones sin costo</span>
          <span className="hidden lg:block">|</span>
          <span className="hidden lg:block">⭐ +50,000 clientes satisfechos</span>
        </div>
        <span className="hidden sm:block">📞 Soporte 24/7</span>
      </div>
    </div>
  );
}
