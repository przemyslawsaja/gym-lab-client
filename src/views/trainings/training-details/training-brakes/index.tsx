import React from 'react'
import Paragraph from '../../../../components/atoms/Paragraph/Paragraph'
import H1 from '../../../../components/atoms/H1/H1'
import { theme } from '../../../../theme/MainTheme';
import { TrainingBrakesContainer } from './styles';
import { TrainingDetailsLayout } from '../training-details-layout';

export const TrainingBrakes = () => {
  return (
    <TrainingDetailsLayout>
      <TrainingBrakesContainer>
        <H1 color={ theme.colors.brand.quaternary300 }>Przerwy pomiędzy ćwiczeniami</H1>
        <br/>
        <Paragraph color={ theme.colors.secondary.color2 }>
          <b>Jaki czas powinieneś/aś poświęcic na przerwy między treningami ?</b> <br/><br/>
          Przerwy między treningami zależą głownie od celu treningowego.
          <p>
            <b>W treningu siły</b> 2 – 5 minut <br/>
            <b>w treningu na redukcję </b> 30 sekund – 1 minuta <br/>
            <b>trening na budowanie masy mięśniowej</b> 45 sekund – 2 minuty <br/>

          </p>
          Kobiety mogą te przerwy jeszcze skrócić o 15 sekund. Warto jednak zwrócić uwagę, że czas przerw nie jest czynnikiem kluczowym.
          Często możemy zaobserwować osoby dużo gadające w przerwach miedzy seriami.
          Siłą rzeczy czas pomiędzy kolejnymi ćwiczeniami jest u nich dłuższy niż wytyczne ale i tak mają bardzo dobre postępy.
          Tak naprawdę, jeśli mamy na to czas, przedłużanie przerw efektywności naszego treningu nie zniszczy.
          Dobrze obserwować jakie przerwy sprawdzają się u nas najlepiej.
        </Paragraph>
      </TrainingBrakesContainer>
    </TrainingDetailsLayout>
  )
}
