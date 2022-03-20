import { observer } from 'mobx-react';
import { TrainingDetailsLayout } from '../TrainingDetailsLayout';
import React from 'react';
import H1 from '../../../../components/atoms/H1/H1';
import Paragraph from '../../../../components/atoms/Paragraph/Paragraph';
import { theme } from '../../../../theme/MainTheme';

export const TrainingRecover = observer(() => {
  return <TrainingDetailsLayout>
    <br/>
    <H1 color={ theme.colors.brand.quaternary300 }>Regenracja</H1>
    <br/>
    <Paragraph color={ theme.colors.secondary.color2 }>
      <section>
        Regeneracja to jeden z elementów pozwalających zachować równowagę w organizmie. Jest tak samo ważna, co zdrowa, właściwie zbilansowana dieta oraz treningi.
        Bez odpowiedniego odpoczynku proces syntezy włókien mięśniowych nie będzie optymalny. Regeneracja jest kluczem do sukcesu nie tylko dla sportowców, których
        treningi są wyjątkowo ciężkie, ale dla każdej trenującej osoby. Podkreślam na wstępie, że odpoczynek dla organizmu nie oznacza przeleżenia całego dnia w
        łóżku przed telewizorem. Aby regeneracja przebiegła prawidłowo, warto wiedzieć, co sprzyja odbudowie komórek. W artykule przedstawię wam sposoby na odpowiednią
        regenerację potreningową.
      </section>
      <br/>
      <br/>
      <section>
        <Paragraph fontSize={ '1.8rem' } color={ '#fff' }>Odpoczynek po treningu – funkcje</Paragraph>
        <br/>
        Podczas treningu nasze mięśnie, stawy i ścięgna narażone są na przeciążenia i mikrouszkodzenia. Regeneracja odbywa się na poziomie komórkowym, a polega przede wszystkim na przywróceniu zasobów
        energii, które wykorzystujemy podczas aktywności fizycznej. Odpowiednio zaplanowany odpoczynek po treningu sprawi, że nasz organizm będzie w stanie podejmować kolejne wyzwania. W obszarze
        sportu będzie to podnoszenie większych ciężarów, wzrost szybkości podczas biegania czy efektywniejsza rekompozycja sylwetki. Proces regeneracji mięśni u osób ćwiczących charakteryzuje się
        aktywacją szeregu cząsteczek wydzielanych przez miocyty i komórki macierzyste im towarzyszące, komórki immunologiczne oraz komórki śródbłonka naczyń. Należą do nich przede wszystkim: IGF-1
        (insulinopodobny czynnik wzrostu 1), PDGF (płytkopochodny czynnik wzrostu) oraz BDNF (neurotroficzny czynnik pochodzenia mózgowego), a są one zaangażowane w odbudowę tkanki mięśniowej [1].
        Jeśli nie będziemy dbać o jeden z elementów składających się na zdrowe podejście do treningów, czyli odpoczynek, może dojść do przetrenowania organizmu. Niesie to za sobą wiele konsekwencji.
        Przy nadmiernym wysiłku i braku odpowiednich przerw od treningów dochodzi do wzrostu ekspresji białka będącego regulatorem katabolizmu mięśniowego (MAFBx), spadku aktywności IGF-1,
        stymulującego anabolizm, spadku aktywności komórek satelitarnych, redukcji miogeniny (białka biorącego udział w regulacji i różnicowaniu się mięśni), a także spadku wrażliwości receptorów
        adrenergicznych [2]. Przewaga procesów katabolicznych nad anabolicznymi dotyczy zarówno układu mięśniowego, jak i innych.

        W jaki sposób może dojść do przetrenowania? Głównie przy ciągłym zwiększaniu objętości i intensywności w przypadku treningów siłowych i interwałowych oraz dużej ilości treningów typu cardio
        połączonych z długotrwałym deficytem kalorycznym. Właśnie dlatego regeneracja po treningu siłowym, i interwałowym będzie szczególnie ważna

      </section>

      <br/>
      <br/>
      <Paragraph fontSize={ '1.8rem' } color={ '#fff' }> Regeneracja po treningu – polecane metody</Paragraph>
      <br />
      Jak zregenerować mięśnie po treningu? Zapoznaj się z najlepszymi według mnie sposobami.

      Jak długo trzeba odpoczywać po treningu?
      Do pełnej regeneracji mięśni po treningu potrzebujesz od 24 do 48 godzin [13]. Dlatego w planie treningowym należy uwzględnić dni przeznaczone na regenerację. Nie oznacza to spędzania całego
      dnia w domu i leżenia na łóżku. Dobrą formą jest również aktywny odpoczynek, do którego zaliczyć możemy spacery, wyjście na basen, saunę czy masaże. Dla osób początkujących zalecane są dwa dni
      przerwy pomiędzy treningami, jednak w miarę wytrenowania organizmu warto przynajmniej jeden dzień w tygodniu poświęcić na aktywną regenerację. Zarówno czas i forma odpoczynku zależą od
      intensywności wykonywanych przez nas treningów. Jedną z najprostszych wydawać by się mogło form odpoczynku jest sen. Jego rola w procesie odnowy organizmu przez wiele osób wciąż jest
      niedoceniania. Sen to podstawowy składnik zdrowia i dobrego samopoczucia, mający znaczący wpływ na rozwój fizyczny, regulację emocjonalną, wydajność poznawczą i jakość życia. To integralna część
      procesu regeneracji i adaptacji pomiędzy treningami. Badania sugerują, że wydłużony czas snu i poprawa jakości snu u sportowców są związane z lepszymi wynikami. Ponadto, lepszy sen może
      zmniejszyć ryzyko urazów i zachorowań u sportowców, nie tylko optymalizując stan zdrowia, lecz także potencjalnie zwiększając wydajność poprzez zwiększony udział w treningu
    </Paragraph>
  </TrainingDetailsLayout>
})