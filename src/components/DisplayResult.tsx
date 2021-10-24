import React, {Component, useRef, useEffect, useState} from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const DisplayResult = () => {

    const [hasTrash, setHasTrash] = useState<boolean[]>([true, false, false, true, true, false, false]);
    const [userResult, setUserResult] = useState<String[]>([]);
    const [finishLoading, setFinishLoading] = useState<Boolean>(false);
    const resultText = [
        "It seems like you are throwing away plastic bottles.\
        Too much plastic in our waste would contribute to more microplastics ending up in ocean and land systems. \
        Why not considering changing to use a reusable bottle (metal/glass) instead to reduce plastic waste?",
        "It seems like you are throwing away reusable bottles.\
        It would be nice to reuse it instead of throwing it away or you can give it to someone who need one reusable bottle.",
        "It seems like you are throwing away boxes.\
        If they are for food, consider buying fresh produce and cook yourself if you have time and equipments since fresh produce usually comes with minimal wrapping.\
        If they are for package dilivery, consider to buy possible items from grocery stores to reduce another layer of packaging.",
        "It seems like you are throwing away cans.\
        If they are for beverages, consider switching to soda machines paired with reusable bottles to reduce can waste.",
        "It seems like you are throwing away plastic/paper bags.\
        To reduce the producing waste consisting of non-reusable bags, consider switching to reusable fabric bags for shopping or carrying items next time.",
        "It seems like you are throwing away wrappers.\
        If they are for food, consider buying fresh produce and cook yourself if you have time and equipments since fresh produce usually comes with minimal wrapping.\
        If they are for package dilivery, consider to buy possible items from grocery stores to reduce another layer of packaging.",
        "It seems like you are throwing away food/fruits.\
        To reduce food waste, consider not to buy too much fresh food that you can't finish eating before they went bad.\
        And for occasions that food waste must be produced (such as fruit peel), remember to throw it in compost."
    ]

    const myRef = useRef(null)

    const scrollToRef = (myRef: React.MutableRefObject<null>) =>{
        if(myRef.current) {
            window.scrollTo(0, myRef.current) 
        }
    }

    const generateResult = () => {
        // need to get the booleans from the back end!!
        setUserResult([])

        hasTrash.map((hasTrashBool, index) => {
            if(hasTrashBool) {
                userResult.push(resultText[index])
            }
        })
        
        setHasTrash([])
        setFinishLoading(!finishLoading)
    }

    

    const displayResult = () => {
        scrollToRef(myRef)
        return(
            <div ref={myRef} style={finishLoading ? { display: 'block' , position: "absolute", marginTop: "780px"} : { display: 'none' }}>
                {userResult.map((res) => {
                    return (
                    <Card style={{backgroundColor: "#6C5CE7", marginBottom: "20px", marginLeft: "-700px", marginRight: "700px"}}>
                        <Card.Body style={{color: "white", fontFamily: 'raleway', fontSize: "18px"}}>{res}</Card.Body>
                    </Card>
                    )
                })}
            </div>
        )
    };

    // const ScrollDemo = () => {

    //     const myRef = useRef(null)
    //     const executeScroll = () => scrollToRef(myRef)
     
    //     return (
    //        <> 
    //           <div ref={myRef} style={{marginBottom:"800px"}}>I wanna be seen</div> 
    //           <button onClick={executeScroll}> Click to scroll </button> 
    //        </>
    //     )
    //  }

    

    return (
        <div>
            {displayResult()}
            <Button variant="primary" size="sm"  style={{backgroundColor:"#6C5CE7", border: '1px solid #6C5CE7', borderRadius: '7px',
            position: 'absolute', marginTop: "500px", marginLeft: "-480px", fontFamily: 'raleway', fontSize: "20px"}} onClick={generateResult}>
                &nbsp;Get My Result&nbsp;
            </Button>
            <h1 style={{fontFamily: 'raleway', fontSize: "70px", position: "absolute", marginTop: "930px", marginLeft: "-130px"}}>Our</h1>
            <h1 style={{fontFamily: 'raleway', fontSize: "120px", position: "absolute", marginTop: "990px", marginLeft: "-130px"}}>&nbsp;&nbsp;Advices</h1>
        </div>
    )
}

export default DisplayResult