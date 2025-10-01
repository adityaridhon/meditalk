import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div id="faq" className="min-h-screen bg-white pt-36 px-6 md:px-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h1>

      <div className="max-w-3xl mx-auto bg-gray-50/10 rounded-2xl shadow p-6 md:p-10">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">
              Apakah layanan ini gratis?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Ya, layanan dasar konsultasi dengan AI voice agent dapat digunakan
              secara gratis. Namun, fitur premium seperti riwayat konsultasi
              panjang atau integrasi khusus mungkin akan tersedia di versi
              berbayar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold">
              Apakah AI bisa menggantikan dokter?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Tidak. AI hanya memberikan saran awal berdasarkan informasi yang
              Anda berikan. Untuk diagnosis dan pengobatan yang akurat, Anda
              tetap harus berkonsultasi dengan tenaga medis profesional.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold">
              Bagaimana privasi data saya dijaga?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Semua data suara dan riwayat konsultasi disimpan secara aman dan
              sesuai dengan standar perlindungan data (UU PDP). Anda juga bisa
              menghapus riwayat kapan saja melalui akun Anda.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold">
              Perangkat apa saja yang bisa digunakan?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Website ini dapat diakses melalui desktop maupun mobile browser.
              Kami juga sedang mengembangkan aplikasi mobile untuk pengalaman
              yang lebih optimal.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-semibold">
              Apakah butuh internet untuk menggunakan layanan?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Ya, layanan ini memerlukan koneksi internet stabil karena
              komunikasi suara diproses secara real-time melalui server AI.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
