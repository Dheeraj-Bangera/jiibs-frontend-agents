import react, {useState} from 'react';
import Selected from './Selected';
import CheckBox from '../CheckBox/CheckBox';
import LifeStyleModal from './LifeStyleModal';

export default function ({options}) {
    const [selectedItems, setSelectedItems] = useState([]);
    const [showDrop, setShowDrop] = useState(false);

    const handleRemoveSelected = (del) => {
        setSelectedItems(selectedItems.filter(item => item !== del));
    }

    const handleAddSelected = (add) => {
        setSelectedItems([...selectedItems, add]);
    }

    return (
        <div>
            <div
                className='text-[14px] px-3 py-2 mt-2 border border-primary focus:border-gray-400 w-full text-dark rounded-lg flex justify-between items-center'
                onClick={() => setShowDrop(true)}
            >
                Select
            </div>
            <div className='flex flex-wrap gap-2 pt-2'>
                {selectedItems.map((item, index) => (
                    <Selected
                        title={options[item]}
                        key={index}
                        onClose={() => handleRemoveSelected(item)}
                    />
                ))}
            </div>
            {showDrop &&
                <div className='relative'>
                    <div 
                        className='fixed inset-0 bg-transparent'
                        onClick={() => setShowDrop(false)}
                    >
                    </div>    
                    <div className='absolute w-full top-[10px] left-0 bg-white rounded-[12px] border-[1px] border-stroke p-2'>
                        {new Array(options.length).fill(0).map((item, index) => {
                            if(selectedItems.indexOf(index) === -1) {
                                return (
                                    <CheckBox
                                        text={options[index]}
                                        onClick={()=>handleAddSelected(index)}
                                    />
                                )
                            }
                        })}
                        <LifeStyleModal />
                    </div>
                </div>
            }

        </div>
    )
}