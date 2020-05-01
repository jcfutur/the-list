import React, { Component } from 'react';
import { Container, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem } from 'mdbreact';
const axios = require('axios');
class ComponentTest extends Component {
    constructor(props) {
        super(props);

        this.handleChangeAjout = this.handleChangeAjout.bind(this);
        this.putCat = this.putCat.bind(this);
        this.getCat = this.getCat.bind(this);

        this.state = {
            tableau: [],
            ajout: ""
        };
   
};

componentDidMount() {
    this.getCat();
};

handleChangeAjout(env) {
    this.setState({
        ajout: env.target.value
    });
};

getCat = () => {
    axios.get('/api/getCat').then(res => {
      const datas = res.data
      this.setState({
        tableau: datas,
      })
      //console.log(this.state.tableau);
    })
};

deleteCat(id) {
    console.log(id);
     
    axios.delete(`api/deleteCat/${id}`)
    .catch((err) => { console.log(err) })
    .then(this.getCat)
};

putCat(env) {
    env.preventDefault();

    const lajout = {
        name: this.state.ajout
    };

    console.log(lajout);

    axios.post('api/putCat', {lajout})
    .then(this.getCat(),
          this.setState({ajout: ""})
    )
    .catch((err) =>  { console.log(err) });

};
/*<table>
                    {this.state.tableau.map( ({_id, name}) => {
                        return (
                        <tr>
                            <td><MDBBtn outline size="sm" color="danger" onClick={this.deleteCat.bind(this, _id)}>&times;</MDBBtn></td>
                            <td>{name}</td>
                        </tr>)
                    })}
                </table>*/


    render() {
        return(
            <>  
                <Container>
                <form onSubmit={this.putCat}>
                    <MDBInput 
                    required
                    type="text"
                    label="Ajouter un produit"
                    value={this.state.ajout}
                    onChange={this.handleChangeAjout}
                    /><br/>
                    
                    <MDBBtn onClick={this.putCat}>Ajouter</MDBBtn>
                </form>
                <MDBBtn onClick={this.getCat()}>Actualiser</MDBBtn><br/><br/>
                <MDBListGroup>
                        {this.state.tableau.map( ({_id, name}) => (
                         <MDBListGroupItem className="d-flex" >
                            <MDBBtn color="#CC0000" onClick={this.deleteCat.bind(this, _id)}>&times;</MDBBtn>
                            <MDBBtn disabled color="dark">{name}</MDBBtn>
                         </MDBListGroupItem>
                        ))}
                </MDBListGroup>
                </Container>
            </>
        )
    }
}

export default ComponentTest;