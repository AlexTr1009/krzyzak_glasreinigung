import Image from "next/image";
import HeroStart from "@/components/HeroStart";
import Background_xl from '../../public/assets/background_xl.png';
import Background_md from '../../public/assets/background_md.jpg';
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { PreiseText } from "@/components/PreiseText";
import { PreiseTags } from "@/components/PreiseTags";



export default function Datenschutz() {
  return (
  <main className="relative min-h-screen">
    <div className="relative xl:hidden lg:hidden mdl:hidden z-10">
      <Navbar currentPage="Datenschutz"/>
    </div>
    <HeroStart currentPage={"Datenschutz"}/>

    {/* <div className="relative bg-gradient-to-b from-black to-[#292929]"> */}
    <div className="relative bg-gradient-to-b from-black to-[#171717]">
        <div className="relative w-full flex justify-center items-center md:absolute md:top-0 z-20 md:hidden sm:hidden">
          <Navbar currentPage={"Datenschutz"}/>
        </div>

        {/* Body */}
        <div className="py-20 px-10 text font-thin">
          <h1 className="text-primary text-4xl font-light md:hidden sm:hidden">DATENSCHUTZERKLÄRUNG</h1><br/>
          <p className="">Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
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
            <h1 className="font-medium text-2xl py-2">Ihre Betroffenenrechte</h1>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: 124/5066/1310</p>
            <ul className="list-disc pl-10 py-3">
              <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
              <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
              <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund  gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
              <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung  eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art.  20 DSGVO).</li>
            </ul>
            <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese  jederzeit mit Wirkung für die Zukunft widerrufen. Sie können sich  jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an  die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder  an die für uns als verantwortliche Stelle zuständige Behörde. Eine Liste  der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift  finden Sie unter: </p>
              {" "}<a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html." className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
              <p>https://www.bfdi.bund.de/DE/Infothek/<br/>Anschriften_Links/anschriften_links-node.html.</p>
            </a>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">Erfassung allgemeiner Informationen beim Besuch unserer Website</h1>
            <h2 className="font-medium text-xl py-2">Art und Zweck der Verarbeitung:</h2>
            <p>Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht  registrieren oder anderweitig Informationen übermitteln, werden  automatisch Informationen allgemeiner Natur erfasst. Diese Informationen  (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das  verwendete Betriebssystem, den Domainnamen Ihres  Internet-Service-Providers, Ihre IP-Adresse und ähnliches. Sie werden  insbesondere zu folgenden Zwecken verarbeitet:</p>
            <ul className="list-disc pl-10 py-3">
              <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
              <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
              <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
              <li>zu weiteren administrativen Zwecken.</li>
            </ul>
            <p>Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu  ziehen. Informationen dieser Art werden von uns ggfs. statistisch  ausgewertet, um unseren Internetauftritt und die dahinterstehende  Technik zu optimieren.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Rechtsgrundlage:</h2>
            <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis  unseres berechtigten Interesses an der Verbesserung der Stabilität und  Funktionalität unserer Website.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Empfänger:</h2>
            <p>Empfänger der Daten sind ggf. technische Dienstleister, die für den  Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig  werden.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Speicherdauer:</h2>
            <p>Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung  nicht mehr erforderlich sind. Dies ist für die Daten, die der  Bereitstellung der Webseite dienen, grundsätzlich der Fall, wenn die  jeweilige Sitzung beendet ist.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Bereitstellung vorgeschrieben oder erforderlich:</h2>
            <p>Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder  gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist  jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht  gewährleistet. Zudem können einzelne Dienste und Services nicht  verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch  ausgeschlossen.</p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">Registrierung auf unserer Website</h1>
            <h2 className="font-medium text-xl py-2">Art und Zweck der Verarbeitung:</h2>
            <p>Bei der Registrierung für die Nutzung unserer personalisierten  Leistungen werden einige personenbezogene Daten erhoben, wie Name,  Anschrift, Kontakt- und Kommunikationsdaten (z. B. Telefonnummer und  E-Mail-Adresse). Sind Sie bei uns registriert, können Sie auf Inhalte  und Leistungen zugreifen, die wir nur registrierten Nutzern anbieten.  Angemeldete Nutzer haben zudem die Möglichkeit, bei Bedarf die bei  Registrierung angegebenen Daten jederzeit zu ändern oder zu löschen.  Selbstverständlich erteilen wir Ihnen darüber hinaus jederzeit Auskunft  über die von uns über Sie gespeicherten personenbezogenen Daten.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Rechtsgrundlage:</h2>
            <p>Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt  auf Grundlage einer Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a  DSGVO). Dient die Registrierung der Erfüllung eines Vertrages, dessen  Vertragspartei die betroffene Person ist oder der Durchführung  vorvertraglicher Maßnahmen, so ist zusätzliche Rechtsgrundlage für die  Verarbeitung der Daten Art. 6 Abs. 1 lit. b DSGVO.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Empfänger:</h2>
            <p>Empfänger der Daten sind ggf. technische Dienstleister, die für den  Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig  werden.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Speicherdauer:</h2>
            <p>Daten werden in diesem Zusammenhang nur verarbeitet, solange die  entsprechende Einwilligung vorliegt. Danach werden sie gelöscht, soweit  keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Zur  Kontaktaufnahme in diesem Zusammenhang nutzen Sie bitte die am Ende  dieser Datenschutzerklärung angegebenen Kontaktdaten.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Bereitstellung vorgeschrieben oder erforderlich:</h2>
            <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig,  allein auf Basis Ihrer Einwilligung. Ohne die Bereitstellung Ihrer  personenbezogenen Daten können wir Ihnen keinen Zugang auf unsere  angebotenen Inhalte und Leistungen gewähren.</p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">Erbringung kostenpflichtiger Leistungen</h1>
            <h2 className="font-medium text-xl py-2">Art und Zweck der Verarbeitung:</h2>
            <p>Zur Erbringung kostenpflichtiger Leistungen werden von uns  zusätzliche Daten erfragt, wie z.B. Zahlungsangaben, um Ihre Bestellung  ausführen zu können.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Rechtsgrundlage:</h2>
            <p>Die Verarbeitung der Daten, die für den Abschluss des Vertrages erforderlich ist, basiert auf Art. 6 Abs. 1 lit. b DSGVO.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Empfänger:</h2>
            <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Speicherdauer:</h2>
            <p>Wir speichern diese Daten in unseren Systemen bis die gesetzlichen  Aufbewahrungsfristen abgelaufen sind. Diese betragen grundsätzlich 6  oder 10 Jahre aus Gründen der ordnungsmäßigen Buchführung und  steuerrechtlichen Anforderungen.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Bereitstellung vorgeschrieben oder erforderlich:</h2>
            <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig.  Ohne die Bereitstellung Ihrer personenbezogenen Daten können wir Ihnen  keinen Zugang auf unsere angebotenen Inhalte und Leistungen gewähren.</p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">Kommentarfunktion</h1>
            <h2 className="font-medium text-xl py-2">Art und Zweck der Verarbeitung:</h2>
            <p>Wenn Nutzer Kommentare auf unserer Website hinterlassen, werden neben  diesen Angaben auch der Zeitpunkt ihrer Erstellung und der zuvor durch  den Websitebesucher gewählte Nutzername gespeichert. Dies dient unserer  Sicherheit, da wir für widerrechtliche Inhalte auf unserer Webseite  belangt werden können, auch wenn diese durch Benutzer erstellt wurden.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Rechtsgrundlage:</h2>
            <p>Die Verarbeitung der als Kommentar eingegebenen Daten erfolgt auf der  Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).  Durch Bereitstellung der Kommentarfunktion möchten wir Ihnen eine  unkomplizierte Interaktion ermöglichen. Ihre gemachten Angaben werden  zum Zwecke der Bearbeitung der Anfrage sowie für mögliche  Anschlussfragen gespeichert.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Empfänger:</h2>
            <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Speicherdauer:</h2>
            <p>Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung  nicht mehr erforderlich sind. Dies ist grundsätzlich der Fall, wenn die  Kommunikation mit dem Nutzer abgeschlossen ist und das Unternehmen den  Umständen entnehmen kann, dass der betroffene Sachverhalt abschließend  geklärt ist.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Bereitstellung vorgeschrieben oder erforderlich:</h2>
            <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig.  Ohne die Bereitstellung Ihrer personenbezogenen Daten können wir Ihnen  keinen Zugang zu unserer Kommentarfunktion gewähren.</p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">Newsletter</h1>
            <h2 className="font-medium text-xl py-2">Art und Zweck der Verarbeitung:</h2>
            <p>Ihre Daten werden ausschließlich dazu verwendet, Ihnen den  abonnierten Newsletter per E-Mail zuzustellen. Die Angabe Ihres Namens  erfolgt, um Sie im Newsletter persönlich ansprechen zu können und ggf.  zu identifizieren, falls Sie von Ihren Rechten als Betroffener Gebrauch  machen wollen. Für den Empfang des Newsletters ist die Angabe Ihrer  E-Mail-Adresse ausreichend. Bei der Anmeldung zum Bezug unseres  Newsletters werden die von Ihnen angegebenen Daten ausschließlich für  diesen Zweck verwendet. Abonnenten können auch über Umstände per E-Mail  informiert werden, die für den Dienst oder die Registrierung relevant  sind (bspw. Änderungen des Newsletterangebots oder technische  Gegebenheiten). Für eine wirksame Registrierung benötigen wir eine  valide E-Mail-Adresse. Um zu überprüfen, dass eine Anmeldung tatsächlich  durch den Inhaber einer E-Mail-Adresse erfolgt, setzen wir das  „Double-opt-in“-Verfahren ein. Hierzu protokollieren wir die Bestellung  des Newsletters, den Versand einer Bestätigungsmail und den Eingang der  hiermit angeforderten Antwort. Weitere Daten werden nicht erhoben. Die  Daten werden ausschließlich für den Newsletterversand verwendet und  nicht an Dritte weitergegeben.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Rechtsgrundlage:</h2>
            <p>Auf Grundlage Ihrer ausdrücklich erteilten Einwilligung (Art. 6 Abs. 1  lit. a DSGVO), übersenden wir Ihnen regelmäßig unseren Newsletter bzw.  vergleichbare Informationen per E-Mail an Ihre angegebene  E-Mail-Adresse. Die Einwilligung zur Speicherung Ihrer persönlichen  Daten und ihrer Nutzung für den Newsletterversand können Sie jederzeit  mit Wirkung für die Zukunft widerrufen. In jedem Newsletter findet sich  dazu ein entsprechender Link. Außerdem können Sie sich jederzeit auch  direkt auf dieser Website abmelden oder uns Ihren Widerruf über die am  Ende dieser Datenschutzhinweise angegebene Kontaktmöglichkeit mitteilen.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Empfänger:</h2>
            <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Speicherdauer:</h2>
            <p>Die Daten werden in diesem Zusammenhang nur verarbeitet, solange die  entsprechende Einwilligung vorliegt. Danach werden sie gelöscht.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Bereitstellung vorgeschrieben oder erforderlich:</h2>
            <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig,  allein auf Basis Ihrer Einwilligung. Ohne bestehende Einwilligung können  wir Ihnen unseren Newsletter leider nicht zusenden.</p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">Kontaktformular</h1>
            <h2 className="font-medium text-xl py-2">Art und Zweck der Verarbeitung:</h2>
            <p>Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen  Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer  validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der  Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die  Angabe weiterer Daten ist optional.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Rechtsgrundlage:</h2>
            <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten  erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1  lit. f DSGVO). Durch Bereitstellung des Kontaktformulars möchten wir  Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten  Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche  Anschlussfragen gespeichert. Sofern Sie mit uns Kontakt aufnehmen, um  ein Angebot zu erfragen, erfolgt die Verarbeitung der in das  Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher  Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Empfänger:</h2>
            <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Speicherdauer:</h2>
            <p>Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage  gelöscht. Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir  den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten  nach Ablauf dieser Fristen.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Bereitstellung vorgeschrieben oder erforderlich:</h2>
            <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig.  Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren  Namen, Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.</p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">Verwendung von Google Analytics</h1>
            <h2 className="font-medium text-xl py-2">Art und Zweck der Verarbeitung:</h2>
            <p>Diese Website benutzt Google Analytics, einen Webanalysedienst der  Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA  (nachfolgend: „Google“). Google Analytics verwendet sog. „Cookies“, also  Textdateien, die auf Ihrem Computer gespeichert werden und die eine  Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das  Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite  werden in der Regel an einen Server von Google in den USA übertragen und  dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf  diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von  Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten  des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur  in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google  in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser  Website wird Google diese Informationen benutzen, um Ihre Nutzung der  Webseite auszuwerten, um Reports über die Webseitenaktivitäten  zusammenzustellen und um weitere mit der Websitenutzung und der  Internetnutzung verbundene Dienstleistungen gegenüber dem  Webseitenbetreiber zu erbringen. Die im Rahmen von Google Analytics von  Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von  Google zusammengeführt. Die Zwecke der Datenverarbeitung liegen in der  Auswertung der Nutzung der Website und in der Zusammenstellung von  Reports über Aktivitäten auf der Website. Auf Grundlage der Nutzung der  Website und des Internets sollen dann weitere verbundene  Dienstleistungen erbracht werden.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Rechtsgrundlage:</h2>
            <p>Die Verarbeitung der Daten erfolgt auf Grundlage einer Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO).</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Empfänger:</h2>
            <p>Empfänger der Daten ist Google als Auftragsverarbeiter. Hierfür haben  wir mit Google den entsprechenden Auftragsverarbeitungsvertrag  abgeschlossen.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Speicherdauer:</h2>
            <p>Die Löschung der Daten erfolgt, sobald diese für unsere Aufzeichnungszwecke nicht mehr erforderlich sind.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Drittlandtransfer:</h2>
            <p>Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen: 
              {" "}<a href="https://www.privacyshield.gov/EU-US-Framework" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
              https://www.privacyshield.gov/EU-US-Framework.
              </a>
            </p>
            <h2 className="font-medium text-xl pb-2 pt-5">Bereitstellung vorgeschrieben oder erforderlich:</h2>
            <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig,  allein auf Basis Ihrer Einwilligung. Sofern Sie den Zugriff unterbinden,  kann es hierdurch zu Funktionseinschränkungen auf der Website kommen.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Widerruf der Einwilligung:</h2>
            <p>Sie können die Speicherung der Cookies durch eine entsprechende  Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch  darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche  Funktionen dieser Website vollumfänglich werden nutzen können. Sie  können darüber hinaus die Erfassung der durch das Cookie erzeugten und  auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse)  an Google sowie die Verarbeitung dieser Daten durch Google verhindern,  indem sie das unter dem folgenden Link verfügbare Browser-Plugin  herunterladen und installieren: 
              {" "}<a href="http://tools.google.com/dlpage/gaoptout?hl=de" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
                Browser Add On zur Deaktivierung von Google Analytics.
              </a>  
              Zusätzlich oder als Alternative zum Browser-Add-On können Sie das  Tracking durch Google Analytics auf unseren Seiten unterbinden, indem  Sie diesen 
              {" "}<a href="" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
                Link
              </a>{" "}  
              Link 
              anklicken. Dabei wird ein Opt-out-Cookie auf Ihrem Gerät installiert. Damit wird die Erfassung durch Google Analytics für diese Website und für diesen Browser zukünftig verhindert, so lange das Cookie in Ihrem Browser  installiert bleibt.
            </p>
            <h2 className="font-medium text-xl pb-2 pt-5">Profiling:</h2>
            <p>Mit Hilfe des Tracking-Tools Google Analytics kann das Verhalten der  Besucher der Webseite bewertet und die Interessen analysiert werden.  Hierzu erstellen wir ein pseudonymes Nutzerprofil.</p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">Verwendung von Scriptbibliotheken (Google Webfonts)</h1>
            <h2 className="font-medium text-xl py-2">Art und Zweck der Verarbeitung:</h2>
            <p>Um unsere Inhalte browserübergreifend korrekt und grafisch  ansprechend darzustellen, verwenden wir auf dieser Website „Google Web  Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA  94043, USA; nachfolgend „Google“) zur Darstellung von Schriften. Die  Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier:
            {" "}<a href="https://www.google.com/policies/privacy/" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
              https://www.google.com/policies/privacy/.
              </a>
            </p>
            <h2 className="font-medium text-xl pb-2 pt-5">Rechtsgrundlage:</h2>
            <p>Die Verarbeitung der Daten erfolgt auf Grundlage einer Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO).Rechtsgrundlage für die Einbindung von Google Webfonts und dem damit  verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1  lit. a DSGVO).</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Empfänger:</h2>
            <p>Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst  automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist  es theoretisch möglich - aktuell allerdings auch unklar ob und ggf. zu  welchen Zwecken - dass der Betreiber in diesem Fall Google Daten erhebt.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Speicherdauer:</h2>
            <p>Wir erheben keine personenbezogenen Daten, durch die Einbindung von  Google Webfonts. Weitere Informationen zu Google Web Fonts finden Sie  unter:
            {" "}<a href="https://developers.google.com/fonts/fa" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
            https://developers.google.com/fonts/fa.
              </a>{" "}
              und in der Datenschutzerklärung von Google:
              {" "}<a href="https://www.google.com/policies/privacy/" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
              https://www.google.com/policies/privacy/.
              </a>{" "}
            </p>
            <h2 className="font-medium text-xl pb-2 pt-5">Drittlandtransfer:</h2>
            <p>Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen: 
              {" "}<a href="https://www.privacyshield.gov/EU-US-Framework" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
              https://www.privacyshield.gov/EU-US-Framework.
              </a>
            </p>
            <h2 className="font-medium text-xl pb-2 pt-5">Bereitstellung vorgeschrieben oder erforderlich:</h2>
            <p>Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich,  noch vertraglich vorgeschrieben. Allerdings kann ggfs. die korrekte  Darstellung der Inhalte durch Standardschriften nicht möglich sein.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Widerruf der Einwilligung:</h2>
            <p>Zur Darstellung der Inhalte wird regelmäßig die Programmiersprache  JavaScript verwendet. Sie können der Datenverarbeitung daher  widersprechen, indem Sie die Ausführung von JavaScript in Ihrem Browser  deaktivieren oder einen JavaScript-Blocker installieren. Bitte beachten  Sie, dass es hierdurch zu Funktionseinschränkungen auf der Website  kommen kann.</p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">Verwendung von Google Maps</h1>
            <h2 className="font-medium text-xl py-2">Art und Zweck der Verarbeitung:</h2>
            <p>Auf dieser Webseite nutzen wir das Angebot von Google Maps. Google  Maps wird von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA  94043, USA (nachfolgend „Google“) betrieben. Dadurch können wir Ihnen  interaktive Karten direkt in der Webseite anzeigen und ermöglichen Ihnen  die komfortable Nutzung der Karten-Funktion. Nähere Informationen über  die Datenverarbeitung durch Google können Sie:
            {" "}<a href="https://www.google.com/policies/privacy/" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
              den Google-Datenschutzhinweisen
              </a>{" "}
              entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen  Datenschutz-Einstellungen verändern. Ausführliche Anleitungen zur  Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten finden Sie
              {" "}<a href="http://www.dataliberation.org/" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
                hier.
              </a>            
            </p>
            <h2 className="font-medium text-xl pb-2 pt-5">Rechtsgrundlage:</h2>
            <p>Rechtsgrundlage für die Einbindung von Google Maps und dem damit  verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1  lit. a DSGVO).</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Empfänger:</h2>
            <p>Durch den Besuch der Webseite erhält Google Informationen, dass Sie  die entsprechende Unterseite unserer Webseite aufgerufen haben. Dies  erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über  das Sie eingeloggt sind, oder ob keine Nutzerkonto besteht. Wenn Sie bei  Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto  zugeordnet. Wenn Sie die Zuordnung in Ihrem Profil bei Google nicht  wünschen, müssen Sie sich vor Aktivierung des Buttons bei Google  ausloggen. Google speichert Ihre Daten als Nutzungsprofile und nutzt sie  für Zwecke der Werbung, Marktforschung und/oder bedarfsgerechter  Gestaltung seiner Webseite. Eine solche Auswertung erfolgt insbesondere  (selbst für nicht eingeloggte Nutzer) zur Erbringung bedarfsgerechter  Werbung und um andere Nutzer des sozialen Netzwerks über Ihre  Aktivitäten auf unserer Webseite zu informieren. Ihnen steht ein  Widerspruchsrecht zu gegen die Bildung dieser Nutzerprofile, wobei Sie  sich zur Ausübung dessen an Google richten müssen.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Speicherdauer:</h2>
            <p>Wir erheben keine personenbezogenen Daten, durch die Einbindung von Google Maps.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Drittlandtransfer:</h2>
            <p>Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen: 
              {" "}<a href="https://www.privacyshield.gov/EU-US-Framework" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
              https://www.privacyshield.gov/EU-US-Framework.
              </a>
            </p>
            <h2 className="font-medium text-xl pb-2 pt-5">Bereitstellung vorgeschrieben oder erforderlich:</h2>
            <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig,  allein auf Basis Ihrer Einwilligung. Sofern Sie den Zugriff unterbinden,  kann es hierdurch zu Funktionseinschränkungen auf der Website kommen.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Widerruf der Einwilligung:</h2>
            <p>Wenn Sie nicht möchten, dass Google über unseren Internetauftritt  Daten über Sie erhebt, verarbeitet oder nutzt, können Sie in Ihrem  Browsereinstellungen JavaScript deaktivieren. In diesem Fall können Sie  unsere Webseite jedoch nicht oder nur eingeschränkt nutzen.</p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">Eingebettete YouTube-Videos</h1>
            <h2 className="font-medium text-xl py-2">Art und Zweck der Verarbeitung:</h2>
            <p>Auf einigen unserer Webseiten betten wir YouTube-Videos ein.  Betreiber der entsprechenden Plugins ist die YouTube, LLC, 901 Cherry  Ave., San Bruno, CA 94066, USA (nachfolgend „YouTube“). Wenn Sie eine  Seite mit dem YouTube-Plugin besuchen, wird eine Verbindung zu Servern  von YouTube hergestellt. Dabei wird YouTube mitgeteilt, welche Seiten  Sie besuchen. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, kann  YouTube Ihr Surfverhalten Ihnen persönlich zuzuordnen. Dies verhindern  Sie, indem Sie sich vorher aus Ihrem YouTube-Account ausloggen. Wird ein  YouTube-Video gestartet, setzt der Anbieter Cookies ein, die Hinweise  über das Nutzerverhalten sammeln. Weitere Informationen zu Zweck und  Umfang der Datenerhebung und ihrer Verarbeitung durch YouTube erhalten  Sie in den Datenschutzerklärungen des Anbieters, Dort erhalten Sie auch  weitere Informationen zu Ihren diesbezüglichen Rechten und  Einstellungsmöglichkeiten zum Schutze Ihrer Privatsphäre (
            <a href="https://policies.google.com/privacy" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy
              </a>
              ) Google verarbeitet Ihre Daten in den USA und hat sich dem EU-US Privacy  Shield unterworfen
              {" "}<a href="https://www.privacyshield.gov/EU-US-Framework" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
                https://www.privacyshield.gov/EU-US-Framework
              </a>            
            </p>
            <h2 className="font-medium text-xl pb-2 pt-5">Rechtsgrundlage:</h2>
            <p>Rechtsgrundlage für die Einbindung von YouTube und dem damit  verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1  lit. a DSGVO).</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Empfänger:</h2>
            <p>Der Aufruf von YouTube löst automatisch eine Verbindung zu Google aus.</p>
            <h2 className="font-medium text-xl pb-2 pt-5">Speicherdauer und Widerruf der Einwilligung:</h2>
            <p>Wer das Speichern von Cookies für das Google-Ad-Programm deaktiviert  hat, wird auch beim Anschauen von YouTube-Videos mit keinen solchen  Cookies rechnen müssen. YouTube legt aber auch in anderen Cookies  nicht-personenbezogene Nutzungsinformationen ab. Möchten Sie dies  verhindern, so müssen Sie das Speichern von Cookies im Browser  blockieren. Weitere Informationen zum Datenschutz bei „YouTube“ finden  Sie in der Datenschutzerklärung des Anbieters unter:
              {" "}<a href="https://www.google.de/intl/de/policies/privacy/" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
              https://www.google.de/intl/de/policies/<br/>privacy/.
              </a>
            </p>
            <h2 className="font-medium text-xl pb-2 pt-5">Drittlandtransfer:</h2>
            <p>Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen: 
            {" "}<a href="https://www.privacyshield.gov/EU-US-Framework" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
              https://www.privacyshield.gov/EU-US-Framework.
              </a>
            </p>
            <h2 className="font-medium text-xl pb-2 pt-5">Bereitstellung vorgeschrieben oder erforderlich:</h2>
            <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig,  allein auf Basis Ihrer Einwilligung. Sofern Sie den Zugriff unterbinden,  kann es hierdurch zu Funktionseinschränkungen auf der Website kommen.</p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">Social Plugins</h1>
            <h2 className="font-medium text-xl py-2">Art und Zweck der Verarbeitung:</h2>
            <p>Wir bieten Ihnen auf unserer Webseite die Möglichkeit der Nutzung von  sog. „Social-Media-Buttons“ an. Zum Schutze Ihrer Daten setzen wir bei  der Implementierung auf die Lösung „Shariff“. Hierdurch werden diese  Buttons auf der Webseite lediglich als Grafik eingebunden, die eine  Verlinkung auf die entsprechende Webseite des Button-Anbieters enthält.  Durch Anklicken der Grafik werden Sie somit zu den Diensten der  jeweiligen Anbieter weitergeleitet. Erst dann werden Ihre Daten an die  jeweiligen Anbieter gesendet. Sofern Sie die Grafik nicht anklicken,  findet keinerlei Austausch zwischen Ihnen und den Anbietern der  Social-Media-Buttons statt. Informationen über die Erhebung und  Verwendung Ihrer Daten in den sozialen Netzwerken finden Sie in den  jeweiligen Nutzungsbedingungen der entsprechenden Anbieter. Mehr  Informationen zur Shariff-Lösung finden Sie hier:
            {" "}<a href="http://www.heise.de/ct/artikel/Shariff-Social-Media-Buttons-mit-Datenschutz-2467514.html" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
              http://www.heise.de/ct/artikel/Shariff-Social-Media-Buttons-mit-Datenschutz-2467514.html
              </a>{" "}
              Wir haben auf unserer Website die Social-Media-Buttons folgender Unternehmen eingebunden:
            </p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">SSL-Verschlüsselung</h1>
            <p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen,  verwenden wir dem aktuellen Stand der Technik entsprechende  Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">Eingesetzte Auftragsverarbeiter</h1>
            <p>Folgende Organisationen, Unternehmen bzw. Personen wurden vom  Betreiber dieser Website mit der Verarbeitung von Daten beauftragt:  Hosteurope Hansestraße 111 51149 Köln</p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">Änderung unserer Datenschutzbestimmungen</h1>
            <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit  sie stets den aktuellen rechtlichen Anforderungen entspricht oder um  Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,  z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt  dann die neue Datenschutzerklärung.</p>
          </div>

          <div className="py-3">
            <h1 className="font-medium text-2xl py-2">Fragen an den Datenschutzbeauftragten</h1>
            <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine  E-Mail oder wenden Sie sich direkt an die für den Datenschutz  verantwortliche Person in unserer Organisation: Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für
            {" "}<a href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/" className="text-primary font-normal underline" target="_blank" rel="noopener noreferrer">
              externe Datenschutzbeauftragte
              </a>
            </p>
          </div>

        </div>
    </div>
    <Footer/>
  </main>
  );
}
