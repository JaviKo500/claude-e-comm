"use client";

import { useState } from "react";
import { CreditCard, Truck, User, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type PaymentMethod = "card" | "paypal" | "transfer";

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  return (
    <div className="space-y-6">
      {/* Personal info */}
      <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
          <h2 className="font-semibold text-zinc-900 flex items-center gap-2">
            <User className="w-4 h-4" /> Datos personales
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-zinc-600 mb-1 block">Nombre</label>
            <Input placeholder="Juan" />
          </div>
          <div>
            <label className="text-sm text-zinc-600 mb-1 block">Apellido</label>
            <Input placeholder="García" />
          </div>
          <div className="col-span-2">
            <label className="text-sm text-zinc-600 mb-1 block">Email</label>
            <Input type="email" placeholder="juan@email.com" />
          </div>
          <div className="col-span-2">
            <label className="text-sm text-zinc-600 mb-1 block">Teléfono</label>
            <Input type="tel" placeholder="+54 11 1234-5678" />
          </div>
        </div>
      </div>

      {/* Shipping */}
      <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
          <h2 className="font-semibold text-zinc-900 flex items-center gap-2">
            <Truck className="w-4 h-4" /> Dirección de envío
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="text-sm text-zinc-600 mb-1 block">Dirección</label>
            <Input placeholder="Av. Corrientes 1234" />
          </div>
          <div>
            <label className="text-sm text-zinc-600 mb-1 block">Ciudad</label>
            <Input placeholder="Buenos Aires" />
          </div>
          <div>
            <label className="text-sm text-zinc-600 mb-1 block">Código postal</label>
            <Input placeholder="C1043" />
          </div>
          <div>
            <label className="text-sm text-zinc-600 mb-1 block">Provincia</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                {["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "Tucumán"].map((p) => (
                  <SelectItem key={p} value={p.toLowerCase()}>{p}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm text-zinc-600 mb-1 block">País</label>
            <Input defaultValue="Argentina" disabled />
          </div>
        </div>
      </div>

      {/* Payment */}
      <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
          <h2 className="font-semibold text-zinc-900 flex items-center gap-2">
            <CreditCard className="w-4 h-4" /> Método de pago
          </h2>
        </div>

        {/* Payment method selector */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {(["card", "paypal", "transfer"] as PaymentMethod[]).map((method) => (
            <button
              key={method}
              onClick={() => setPaymentMethod(method)}
              className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                paymentMethod === method
                  ? "border-teal-500 bg-teal-50 text-teal-700"
                  : "border-zinc-200 text-zinc-600 hover:border-zinc-300"
              }`}
            >
              {method === "card" ? "💳 Tarjeta" : method === "paypal" ? "🅿 PayPal" : "🏦 Transferencia"}
            </button>
          ))}
        </div>

        {paymentMethod === "card" && (
          <div className="space-y-4">
            <div>
              <label className="text-sm text-zinc-600 mb-1 block">Número de tarjeta</label>
              <Input placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-zinc-600 mb-1 block">Vencimiento</label>
                <Input placeholder="MM/AA" />
              </div>
              <div>
                <label className="text-sm text-zinc-600 mb-1 block">CVV</label>
                <Input placeholder="123" type="password" />
              </div>
            </div>
            <div>
              <label className="text-sm text-zinc-600 mb-1 block">Nombre en la tarjeta</label>
              <Input placeholder="JUAN GARCIA" />
            </div>
          </div>
        )}

        {paymentMethod === "paypal" && (
          <div className="text-center py-8 text-zinc-500">
            <div className="text-4xl mb-3">🅿</div>
            <p className="text-sm">Serás redirigido a PayPal para completar el pago</p>
          </div>
        )}

        {paymentMethod === "transfer" && (
          <div className="bg-zinc-50 rounded-xl p-4 text-sm text-zinc-600 space-y-1">
            <div><span className="font-medium">Banco:</span> Banco Galicia</div>
            <div><span className="font-medium">CBU:</span> 0070999620000002136215</div>
            <div><span className="font-medium">Alias:</span> TECHSTORE.PAGOS</div>
            <div className="text-xs text-zinc-400 mt-2">El pedido se confirmará al acreditar el pago (1-2 días hábiles)</div>
          </div>
        )}
      </div>

      {/* Submit */}
      <Button className="w-full bg-teal-500 hover:bg-teal-400 text-white h-12 text-base gap-2">
        <Lock className="w-4 h-4" /> Confirmar pedido
      </Button>
      <p className="text-xs text-zinc-400 text-center">
        🔒 Pago 100% seguro con cifrado SSL. Tus datos están protegidos.
      </p>
    </div>
  );
}
