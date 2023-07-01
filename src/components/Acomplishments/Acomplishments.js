import React from 'react';
import { Data } from '../../constants/constants';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';


const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Acomplishment
    </SectionTitle>
    <Boxes>
      {
        Data.map((card, index) => (
          <Box key={index}>
            <BoxNum>
              {card.number}+
            </BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))
      }
    </Boxes>
  </Section>
);

export default Acomplishments;
