import "./globals.css";
import Home from "./home";
import Head from "next/head";

const KEYWORDS =
  "Advanced Healing Massage Ltd, Advanced Healing Massage Ltd Calgary AB, Massage Therapy Calgary, Registered Massage Therapist Calgary, Professional Massage Therapy Calgary, Healing Massage Calgary, Massage Therapy in Calgary AB, Massage Therapist near T3N 1V9, Calgary Massage Clinic, Best Massage Therapy Calgary, Massage Services Calgary Alberta, Therapeutic Massage Calgary, Deep Tissue Massage Calgary, Relaxation Massage Calgary, Stress Relief Massage Calgary, Pain Relief Massage Calgary, Sports Massage Calgary, Prenatal Massage Calgary, Swedish Massage Calgary, Affordable massage therapy in Calgary, Professional massage therapist in Calgary Alberta, Book massage appointment in Calgary, Healing and relaxation massage Calgary";

export default function Page() {
  return (
    <>
      <Head>
        <title>Advanced Healing Massage Ltd | Massage Therapy Calgary</title>
        <meta
          name="description"
          content="Advanced Healing Massage Ltd offers professional registered massage therapy in Calgary AB for relaxation, pain relief, stress reduction, and sports recovery. Book your next massage treatment today."
        />
        <meta name="keywords" content={KEYWORDS} />
      </Head>
      <Home />
    </>
  );
}
