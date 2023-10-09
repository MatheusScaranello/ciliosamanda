import Register from "../registers/Registers";
import { FaPen, FaTrash } from 'react-icons/fa';

const TransactionList = ({ list, deleteTransaction, edit, color} ) => {

   
    return (
        <div style={{backgroundColor: color}}>
        {
        
        list.map(item => (
            <Register
                key={item.id}
                id={item.id}
                value={item.value}
                description={item.description}
                color={item.color}
                deleteTransaction={deleteTransaction}
                edit={edit}
            />
         ))}
        </div>
    );
    };

export default TransactionList;