import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import { mainDemoOnepage } from "@/data/menu";

export const metadata = {
  title: "Termeni și condiții | Sneaker Restore",
  description:
    "Termenii și condițiile de utilizare și prestare a serviciilor Sneaker Restore.",
};

export default function TermsPage() {
  return (
    <>
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
          <Header1 links={mainDemoOnepage} />
        </nav>

        <main style={{ padding: "140px 20px 80px", maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ marginBottom: "24px" }}>Termeni și condiții</h1>

          <p style={{ marginBottom: "24px", lineHeight: "1.7" }}>
            Încredințarea articolelor către atelierul Sneaker Restore reprezintă
            acceptul tuturor condițiilor afișate mai jos:
          </p>

          <ol style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
            <li style={{ marginBottom: "18px" }}>
              Curățarea încălțămintei se realizează în conformitate cu instrucțiunile
              stabilite de producător și înscrise pe etichete sau pe cutii. Dacă
              produsul nu are cutie sau etichetă cu recomandările de întreținere,
              Clientul își asumă răspunderea pentru orice daune produse ca urmare a
              procesului de curățare și igienizare. Același principiu se aplică și în
              cazul în care Clientul solicită curățarea într-un mod ce nu corespunde
              instrucțiunilor de pe etichetă.
            </li>

            <li style={{ marginBottom: "18px" }}>
              Verificarea cantitativă și calitativă a bunurilor se face la momentul
              predării acestora către Client. Orice contestații sau reclamații
              ulterioare nu vor fi luate în considerare.
            </li>

            <li style={{ marginBottom: "18px" }}>
              Sneaker Restore își rezervă dreptul de a efectua poze în cazul oricăror
              defecțiuni pe care le prezintă încălțămintea înainte de a efectua
              procesul de curățare. Clientul agrează că aceste fotografii fac dovada
              oricăror defecțiuni anterioare procesului de curățare, iar orice
              răspundere din partea Sneaker Restore pentru acestea este exclusă.
            </li>

            <li style={{ marginBottom: "18px" }}>
              Articolele din piele naturală și blană naturală, cele care conțin
              componente din aceste materiale sau orice alte combinații de materiale
              se vor curăța exclusiv pe răspunderea Clientului. Clientul înțelege că,
              în cazul acestor articole, pot apărea modificări de dimensiune,
              modificări accentuate de culoare, rupturi ale pielii etc. Dacă
              Clientul solicită curățarea încălțămintei într-un mod contrar opiniei
              specialistului, aceasta se va face pe riscul său.
            </li>

            <li style={{ marginBottom: "18px" }}>
              Pentru pierderea sau distrugerea nasturilor, fermoarelor, branțurilor,
              șireturilor, ornamentelor sau pentru desfacerea lipiturilor
              confecțiilor, Sneaker Restore nu poate fi făcută răspunzătoare.
            </li>

            <li style={{ marginBottom: "18px" }}>
              Sneaker Restore nu își asumă răspunderea pentru petele dificile care nu
              ies în urma unor procese repetate de curățare sau pentru deteriorarea
              materialului în urma procedurilor. De asemenea, Sneaker Restore nu
              răspunde pentru eventualele deteriorări sau modificări asupra bunurilor
              care fac obiectul curățării dacă acestea provin din pricina unor vicii
              ascunse ale produsului sau materialului, a unei defecțiuni ori a
              calității scăzute a materialului, a țesăturii sau a pigmentului ori
              dacă produsul a fost deteriorat deși curățarea a fost realizată cu
              respectarea etichetei firmei producătoare. Clientul se poate adresa
              unui expert tehnic neutru.
            </li>

            <li style={{ marginBottom: "18px" }}>
              În cazul deteriorării grave a articolelor din cauza Sneaker Restore sau
              în cazul furtului prin efracție din unitate, constatat de organele de
              poliție, firma va oferi despăgubiri reprezentând maximum de zece ori
              costul curățării acelui obiect, în termen de maximum 30 de zile de la
              constatare. Produsul despăgubit rămâne în posesia Sneaker Restore.
            </li>

            <li style={{ marginBottom: "18px" }}>
              Sneaker Restore își rezervă dreptul de a refuza bunurile care sunt
              într-o stare avansată de uzură sau degradare, care denotă prezența
              factorilor de infecție sau prezintă defecte.
            </li>

            <li style={{ marginBottom: "18px" }}>
              Obiectele neridicate în termen de 30 de zile de la înștiințarea
              Clientului se consideră abandonate.
            </li>
          </ol>
        </main>

        <Footer1 />
      </div>
    </>
  );
}