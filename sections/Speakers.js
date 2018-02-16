import styled from 'styled-components'

import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import SectionContent from 'components/SectionContent'
import Grid from 'components/Grid'
import Person from 'components/Person'
import { InvisibleAnchor } from 'components/Anchor'

const Speakers = ({ speakersList, heading = 'Speakers 2018' }) => [
  <InvisibleAnchor key="2" id="speakers-padded" />,

  <Wrapper key="1" id="speakers">
    <Container>
      <SectionContent>
        <SectionTitle spacing="large">{heading}</SectionTitle>

        <Grid>
          {GridItem =>
            speakersList.map((v, i) => (
              <GridItem key={i}>
                <Person {...v} />
              </GridItem>
            ))
          }
        </Grid>
      </SectionContent>
    </Container>
  </Wrapper>,
]

export default Speakers

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`
