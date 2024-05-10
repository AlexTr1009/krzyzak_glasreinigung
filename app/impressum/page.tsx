import Image from "next/image";
import HeroStart from "@/components/HeroStart";
import Background_xl from '../../public/assets/background_xl.png';
import Background_md from '../../public/assets/background_md.jpg';
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { PreiseText } from "@/components/PreiseText";
import { PreiseTags } from "@/components/PreiseTags";



export default function Impressum() {
  return (
  <main className="relative min-h-screen">
    <div className="relative xl:hidden lg:hidden mdl:hidden z-10">
      <Navbar currentPage="Impressum"/>
    </div>
    <HeroStart currentPage={"Impressum"}/>

    {/* <div className="relative bg-gradient-to-b from-black to-[#292929]"> */}
    <div className="relative bg-gradient-to-b from-black to-[#171717]">
        <div className="relative w-full flex justify-center items-center md:absolute md:top-0 z-20 md:hidden sm:hidden">
          <Navbar currentPage={"Impressum"}/>
        </div>

        {/* Body */}
        <div className="py-20 px-10 text font-thin">
          <h1 className="text-primary text-4xl font-light md:hidden sm:hidden">IMPRESSUM</h1><br/>
          <h2 className="text-2xl font-normal pb-5">ANGABEN GEMÄSS § 5 TMG</h2>
          <div className="py-3">
            <span className="font-medium">Anna Krzyzak</span><br/>
            Herderstr. 66<br/>
            46045 Oberhausen<br/>
          </div>
          <div className="pb-5">
            <span className="font-medium">Kontakt:</span><br/>
            Telefon: +49 177 31 33 857<br/>
            E-Mail: mail@fensterreinigung-ob.de<br/>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">UMSATZSTEUER-ID</h1>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: 124/5066/1310</p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">STREITSCHLICHTUNG</h1>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.<br/>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">HAFTUNG FÜR INHALTE</h1>
            <p>
              Als Diensteanbieter sind wir gemäß § 7  Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen  Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder  gespeicherte fremde Informationen zu überwachen oder nach Umständen zu  forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="pt-3">
              Verpflichtungen  zur Entfernung oder Sperrung der Nutzung von Informationen nach den  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche  Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten  Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden  Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">URHEBERRECHT</h1>
            <p>
              Die durch die Seitenbetreiber erstellten  Inhalte und Werke auf diesen Seiten unterliegen dem deutschen  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede  Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der  schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.  Downloads und Kopien dieser Seite sind nur für den privaten, nicht  kommerziellen Gebrauch gestattet.
            </p>
            <p className="py-3">
              Soweit  die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,  werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte  Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine  Urheberrechtsverletzung aufmerksam werden, bitten wir um einen  entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden  wir derartige Inhalte umgehend entfernen.
            </p>
            Quelle:
            <a href="https://www.e-recht24.de/impressum-generator.html" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
              https://www.e-recht24.de/impressum-generator.html
            </a>
          </div>

        </div>


        

        


    </div>
    <Footer/>
    

  </main>
  );
}