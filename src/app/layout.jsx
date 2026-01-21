import "./globals.css";
import Header from "@/app/header";
import Footer from "@/app/footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Advanced healing massage Ltd</title>
                <meta name="description" content="Advanced Healing Massage Ltd offers therapeutic treatments focused on relaxation, pain relief, recovery, and restoring balance to body and mind health" />
                <meta name="keywords" content="Advanced Healing Massage, Therapeutic Massage, Relaxation Massage, Pain Relief, Recovery Massage, Body and Mind Health" />


            </head>
            <body>

                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}