import React from 'react';
import {font_style} from '../theme/font';
import {first_name,
        last_name,
        phone_number,
        email,
        county,
        township,
        road,
        zip,
        first_name_input_error,
        last_name_input_error,
        phone_number_input_error,
        email_input_error,
        county_input_error,
        township_input_error,
        road_input_error,
        zip_input_error,
        agree_privacy_term1,
        agree_privacy_term2,
        agree_receive_notice,
        privacy_term_link,
        agree_privacy_term_error,
        submit_order,
        order_receiving_url
    } from '../theme/text';
// import "shards-ui/dist/css/shards.min.css"

class CartPage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            first_name: "",
            last_name: "",
            phone_number: "",
            county: "",
            township: "",
            road: "",
            agree_receive_notice: true,
            agree_privacy_term: false,
            // isGoing: true,
            // numberOfGuests: 0,
            is_validated: "needs-validation"
        }

        this.handle_input_change = this.handle_input_change.bind(this);
        this.handle_submit_click = this.handle_submit_click.bind(this);
    }

    handle_input_change(event){
        const target = event.target;
        const name = target.name;
        const value = target.type == 'checkbox'? target.checked : target.value;
        this.setState({
            [name]: value
        })
        console.log(name + value)
    }

    handle_submit_click(event){
        var form = event.target;
        if(form.checkValidity() == false){
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({
            is_validated: "needs-validation was-validated"
        })
    }

    render(){
        return (
            <div class="container mb-3" style={font_style}>
                <div style={{height: "10rem"}}></div>

                <form class={this.state.is_validated} action={order_receiving_url} novalidate>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="validation_first_name">{first_name}</label>
                            <input type="text" name="first_name" class="form-control" id="validation_first_name" onChange={this.handle_input_change} required/>
                            <div class="invalid-feedback">{first_name_input_error}</div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="validation_last_name">{last_name}</label>
                            <input type="text" name="last_name" class="form-control" id="validation_last_name" onChange={this.handle_input_change} required/>
                            <div class="invalid-feedback">{last_name_input_error}</div>
                        </div>
                    </div>
                    <div class="form-row">
                        {/* <div class="col-md-6 mb-3">
                            <label for="validation_cellphone">{cellphone_number}</label>
                            <input type="text" name="cellphone_number" class="form-control" id="validation_cellphone_number" onChange={this.handle_input_change} required/>
                            <div class="invalid-feedback">{cellphone_number_input_error}</div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="validation_telephone_number">{telephone_number}</label>
                            <input type="text" name="telephone_number" class="form-control" id="validation_telephone_number" onChange={this.handle_input_change} required/>
                            <div class="invalid-feedback">{telephone_number_input_error}</div>
                        </div> */}
                        <div class="col-md-6 mb-3">
                            <label for="validation_phone_number">{phone_number}</label>
                            <input type="text" name="phone_number" pattern="[0-9]{9,}" class="form-control" id="validation_phone_number" onChange={this.handle_input_change} required/>
                            <div class="invalid-feedback">{phone_number_input_error}</div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="validation_email">{email}</label>
                            <input type="text" name="email" pattern="[^@\s]+@[^@\s]+" class="form-control" id="validation_email" onChange={this.handle_input_change} required/>
                            <div class="invalid-feedback">{email_input_error}</div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="validation_zip">{zip}</label>
                            <input type="text" name="zip" pattern="[0-9]{5}" class="form-control" id="validation_zip" onChange={this.handle_input_change} required/>
                            <div class="invalid-feedback">{zip_input_error}</div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validation_county">{county}</label>
                            <input type="text" name="county" class="form-control" id="validation_county" onChange={this.handle_input_change} required/>
                            <div class="invalid-feedback">{county_input_error}</div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validation_township">{township}</label>
                            <input type="text" name="township" class="form-control" id="validation_township" onChange={this.handle_input_change} required/>
                            <div class="invalid-feedback">{township_input_error}</div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col mb-3">
                            <label for="validation_road">{road}</label>
                            <input type="text" name="road" class="form-control" id="validation_road" onChange={this.handle_input_change} required/>
                            <div class="invalid-feedback">{road_input_error}</div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="custom-control custom-checkbox  mb-3">
                            <input class="custom-control-input" type="checkbox" name="agree_receive_notice" value="" id="agree_receive_notice" onChange={this.handle_input_change} checked={this.state.agree_receive_notice}/>
                            <label class="custom-control-label" for="agree_receive_notice" style={{color: "black"}}>
                                {agree_receive_notice}
                            </label>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="custom-control custom-checkbox mb-3">
                            <input class="custom-control-input" type="checkbox" name="agree_privacy_term" value="" id="agree_privacy_term"  onChange={this.handle_input_change} required/>
                            <label class="custom-control-label" for="agree_privacy_term" style={{color: "black"}}>
                                {agree_privacy_term1}
                                <a href={privacy_term_link}>{agree_privacy_term2}</a>
                            </label>
                            <div class="invalid-feedback">{agree_privacy_term_error}</div>
                        </div>
                    </div>
                    {/* <div style={{textAlign: "center", width: "100%"}}> */}
                    <button class="btn btn-dark btn-pill" type="submit" onClick={this.handle_submit_click} style={{width: "100%"}}>{submit_order}</button>
                    {/* </div> */}
                    
                </form>
    
                {/* <form>
                    <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handle_input_change} />
                    </label>
                    <br />
                    <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handle_input_change} />
                    </label>
                </form>
                <p>{this.state.isGoing.toString()}</p>
                <p>{this.state.numberOfGuests}</p>
                <p>{this.state.first_name}</p> */}
                
            </div>
        );
    }
}


export default CartPage;