import React, {useState} from 'react';

const DisplayResult = () => {

    const [hasTrash, setHasTrash] = useState<boolean[]>([true, false, false, false, false, false, false]);
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

    const generateResult = () => {
        // need to get the booleans from the back end!!

        hasTrash.map((hasTrashBool, index) => {
            if(hasTrashBool) {
                userResult.push(resultText[index])
            }
        })

        setFinishLoading(true)
    }

    const displayResult = () => (
        <div style={finishLoading ? { display: 'block' } : { display: 'none' }}>
            {userResult.map((res) => {
                return (
                <div>{res}</div>
                )
            })}
        </div>
        
    );

    return (
        <div>
            <button onClick={generateResult}>
                Get My Result
            </button>
            {displayResult()}
        </div>    
    )
}

export default DisplayResult