import React from 'react'
import postData from '../API';
import PropertyCard from '../Components/PropertyCard';
import PropertyTable from '../Components/PropertyTable';
import {Container, Row, Col} from 'react-bootstrap';

export class Property extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      properties: [],
      table: []
    }
  }

  componentDidMount(){
    if (this.state.properties.length === 0) {
      postData('https://talent.ender.com/fe-challenge/properties', {}).then(response => {
        this.setState({properties: response})
      })
    } 
  }
  handleClick(index) {
    postData(`https://talent.ender.com/fe-challenge/properties/${index}/leases`, {}).then(response => {
      this.setState({table: response})
    })
  }
  render(){
    const cards = this.state.properties ? this.state.properties.map((p, i) => <Col xs={12} md={4} key={i}><PropertyCard property={p} handleClick={this.handleClick}/></Col>) : '';
    return <div className="Property">
              <Container fluid style={{padding: '2em'}}>
                <Row style={{marginBottom: '3em'}}>
                  {cards}
                </Row>
                <Row>
                  <Col xs={12} md={8}>
                    <h5>Property Name Leases</h5>
                    <PropertyTable table={this.state.table}/>
                  </Col>
                </Row>
              </Container>
          </div>
  }
}

  export default Property;