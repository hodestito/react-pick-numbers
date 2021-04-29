import React from 'react'
import { Modal, Button, Form, Col, Row, InputGroup } from 'react-bootstrap';

class Config extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      min: this.props.min,
      max: this.props.max,
      excludes: this.props.excludes,
      excludes_in: '',
    };
  }

  setShow(mostrar) {
    this.setState({
      show: mostrar
    })
  }

  handleClose() {
    this.setShow(false);
  }

  handleShow() {
    this.setShow(true);
  }

  exibeParams() {
    console.log("min: " + this.state.min + " max: " + this.state.max + " excludes: " + this.state.excludes);
  }

  setParams() {
    this.props.setParams(this.state.min, this.state.max, this.state.excludes);
    this.handleClose();
    // this.exibeParams();
  }

  handleMin(event) {
    event.stopPropagation();
    this.setState({min: parseInt(event.target.value)});
  }

  handleMax(event) {
    event.stopPropagation();
    this.setState({max: parseInt(event.target.value)});
  }

  handleExcludes_in(event) {
    event.stopPropagation();
    this.setState({excludes_in: event.target.value});
  }

  buttonExcludes_insert() {
    var newArray = this.state.excludes;
    newArray.push(parseInt(this.state.excludes_in));
    this.setState({excludes: newArray.sort((a,b) => a-b), excludes_in: []});
  }

  buttonExcludes_delete() {
    var newArray = this.state.excludes;
    var deletar = newArray.indexOf(parseInt(this.state.excludes_in));
    if (deletar > -1) {newArray.splice(deletar,1)}
    this.setState({excludes: newArray, excludes_in: []});
  }

  buttonExcludes_clear() {
    this.setState({excludes: []});
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleShow.bind(this)} variant="outline-secondary"> Config </Button>
        <Modal
          size="sm"
          show={this.state.show}
          onHide={this.handleClose.bind(this)}
          animation={false}
          centered
          className="config-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Configurações</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="formMin">
                    <Form.Label>De:</Form.Label>
                    <Form.Control
                      type="number"
                      onChange={this.handleMin.bind(this)}
                      value={this.state.min}
                    />
                    <Form.Text className="text-muted">Somente números inteiros</Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formMax">
                    <Form.Label>Ate:</Form.Label>
                    <Form.Control
                      type="number"
                      onChange={this.handleMax.bind(this)}
                      value={this.state.max}
                    />
                    <Form.Text className="text-muted">Somente números inteiros</Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formExclude">
                <Form.Label>Excuídos:</Form.Label>
                <InputGroup className="mb-3" onChange={this.handleExcludes_in.bind(this)} value={this.state.excludes_in}>
                  <Form.Control />
                  <InputGroup.Append>
                    <Button variant="outline-success" onClick={this.buttonExcludes_insert.bind(this)}>Incluir</Button>
                    <Button variant="outline-danger" onClick={this.buttonExcludes_delete.bind(this)}>Excluir</Button>
                  </InputGroup.Append>
                </InputGroup>

                <InputGroup className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={this.state.excludes}
                    disabled
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={this.buttonExcludes_clear.bind(this)}>Limpar</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="outline-secondary" onClick={this.handleClose.bind(this)}>Close</Button>
            <Button variant="outline-warning" onClick={this.setParams.bind(this)}>Save changes</Button>
          </Modal.Footer>

        </Modal>
      </div>
    )
  }

}

export default Config;