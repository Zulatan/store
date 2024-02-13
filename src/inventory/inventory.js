import { connect } from "react-redux";

const Inventory = ({cashAmount, lemonCount}) => {
    return (
        <div>
            <h3>Cash : {cashAmount}</h3>
            <h3>Lemonade : {lemonCount}</h3>
        </div>
    );
};

const mapStateToProps = state => {
    return { 
        cashAmount : state.allState.cashAmount,
        lemonCount : state.allState.lemonCount
    };
};

export default connect(mapStateToProps)(Inventory);