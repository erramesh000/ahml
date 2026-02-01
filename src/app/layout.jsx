import "./globals.css";
import Header from "@/app/header";
import Footer from "@/app/footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Advanced Healing Massage Ltd | Professional Massage Therapy in Calgary AB</title>
                <meta
                    name="description"
                    content="Advanced Healing Massage Ltd is a professional Calgary massage clinic providing registered massage therapy for relaxation, pain relief, stress relief, sports recovery, prenatal care, and holistic healing. Book your massage therapy appointment in Calgary AB."
                />
                <meta
                    name="keywords"
                    content="Advanced Healing Massage Ltd, Advanced Healing Massage Ltd Calgary AB, Massage Therapy Calgary, Registered Massage Therapist Calgary, Professional Massage Therapy Calgary, Healing Massage Calgary, Massage Therapy in Calgary AB, Massage Therapist near T3N 1V9, Calgary Massage Clinic, Best Massage Therapy Calgary, Massage Services Calgary Alberta, Therapeutic Massage Calgary, Deep Tissue Massage Calgary, Relaxation Massage Calgary, Stress Relief Massage Calgary, Pain Relief Massage Calgary, Sports Massage Calgary, Prenatal Massage Calgary, Swedish Massage Calgary, Affordable massage therapy in Calgary, Professional massage therapist in Calgary Alberta, Book massage appointment in Calgary, Healing and relaxation massage Calgary"
                />

                <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />

            </head>
            <body>

                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}