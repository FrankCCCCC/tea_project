import React from 'react'
import {useSpring} from 'react-spring'
import {AnimateNumber} from '../animate/Animate'
import Toast from '../toast/Toast'
import {Alert, makeAlert} from '../popUps/Alert'
import {popUpAddPopUp} from '../popUps/PopUpAction'

function AboutPage(props){
    // popUpAddPopUp(2, makeAlert("Test, tttest"), 3000)
    return (
        <div>
            
            <div style={{paddingTop: "3rem"}}></div>
            <AnimateNumber number={5}/>
            {/* <Alert message={"訂購成功"}/> */}
            <Alert message={"訂購成功"}/>
            {/* <Toast title={"訂購成功"}/> */}
            {/* <Toast title={"訂購成功"}/> */}
            {/* <div class="toast" data-autohide="false" toast="show">
                <div class="toast-header">
                <strong class="mr-auto text-primary">Toast Header</strong>
                <small class="text-muted">5 mins ago</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                </div>
                <div class="toast-body">
                Some text inside the toast body
                </div>
            </div> */}

        </div>
    )
}

export default AboutPage