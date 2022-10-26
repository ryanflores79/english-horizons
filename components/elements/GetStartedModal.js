import { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col,
} from "reactstrap";

export default function GetStartedModal({isOpen, toggle}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className=" modal-body p-0">
        <Card className=" bg-secondary shadow border-0">
          <CardHeader className=" bg-white pb-5">
            <div className=" text-muted text-center mb-3">
              <small>Schedule a Free Lesson. Try a Lesson First. Make a Decision Later.</small>
            </div>
          </CardHeader>
          <CardBody className=" px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup>
                <InputGroup className=" input-group-alternative">
                  <Input placeholder="Your Name" type="text"></Input>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className=" input-group-alternative">
                  <Input placeholder="Contact Phone" type="tel"></Input>
                </InputGroup>
              </FormGroup>
              <FormGroup className=" mb-3">
                <InputGroup className=" input-group-alternative">
                  <Input placeholder="Email" type="email"></Input>
                </InputGroup>
              </FormGroup>
              <div className=" text-center">
                <Button className=" my-4" color="primary" type="button">
                  Schedule a Lesson
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </Modal>
  );
}
