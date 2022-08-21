import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux'
import { ColorPiker, CartIcon, PrinterIcon, Valign, Vcenter, Halign, Hcenter } from 'assets'
import { setProductCustomizeProps } from 'redux/reducers/productReducer'
import { onAddToCart, onGetCartData } from "redux/actions/cartActions";
import { onProductPurchase } from "redux/actions/productActions";
import { getCartStates } from "redux/reducers/cartReducer";
import BillingDetails from "modules/popup/BillingDetails";

const Sidebar: React.FC = () => {

  const { isLoading, success } = useSelector(getCartStates)

  // initializing
  const dispatch = useDispatch()
  const [showPopUp, setshowPopUp] = useState(false)
  const [selectInputColor, setSelectInputColor] = useState(true)
  const [customizeProps, setCustomizeProps] = useState({
    uuid: '',
    color: '#dc2626',
    caption_color: '#000000',
    caption: '',
    caption_position_x: 'justify-center',
    caption_position_y: 'items-start',
    size: 0,
    price: 0
  })

  // handle for customization props
  const handleChangeProps = (e: any) => {
    // for add the color for placeholder of select input
    if (e.target.name === 'size') setSelectInputColor(false)
    setCustomizeProps((prevProps) => (
      {
        ...prevProps,
        [e.target.name]: e.target.name === 'size' ? +e.target.value : e.target.value
      }
    ))
    // for uuid only
    setCustomizeProps((prevProps) => ({
      ...prevProps,
      uuid: uuidv4(),
    }))
    // for price only
    if (e.target.name === 'size') {
      setCustomizeProps((prevProps) => ({
        ...prevProps,
        price: Number(e.target.value)
      }))
    }
  }

  useEffect(() => {
    // pass the props to product page for local use
    dispatch(setProductCustomizeProps(customizeProps))
  }, [customizeProps, dispatch])


  // for empty input when successfully added product into cart
  useEffect(() => {
    if (success) {
      setCustomizeProps({
        uuid: '',
        color: '#dc2626',
        caption_color: '#000000',
        caption: '',
        caption_position_x: 'justify-center',
        caption_position_y: 'items-start',
        size: 0,
        price: 0
      })
      // for add the color for placeholder of select input
      setSelectInputColor(true)
    }
  }, [success])

  // pick color on click pattlers
  const handleColorPiker = (color: string) => {

    // set state
    setCustomizeProps((prevProps) => (
      {
        ...prevProps,
        color,
      }
    ))
  }


  // pick position click on icon 
  const handleAlignPiker = (position: string, align: string) => {

    // set state for position
    if (align === 'x') {
      setCustomizeProps((prevProps) => (
        {
          ...prevProps,
          caption_position_x: position,
        }
      ))
    }
    else {
      setCustomizeProps((prevProps) => (
        {
          ...prevProps,
          caption_position_y: position,
        }
      ))
    }
  }

  // when click print it or add to cart btn 
  const handleProduct = (type: string) => {
    // @ts-ignore
    const billingDetails = JSON.parse(localStorage.getItem('user_agent')).billingDetails
    if (type === 'cart') dispatch(onAddToCart(customizeProps))
    else if (billingDetails?.card_number) {
      dispatch(onProductPurchase({
        product: customizeProps,
        // @ts-ignore
        billingDetails,
      }))
      setshowPopUp(false)
    }
    else setshowPopUp(true)
  }

  return (
    <>
      {isLoading && <div className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>}
      <div className="fixed h-full bg-white p-3 md:p-5 w-72 right-0  border-t border-slate-300">
        <p className="font-bold text-md mb-4 md:mb-8 text-blue-600">Customization</p>
        <form>
          <label htmlFor="caption" className="font-500 mr-2 text-xs mb-1 inline-block">Caption</label>
          <div className="col-span-3">
            <div className="flex justify-between">
              <input type="text" value={customizeProps.caption} onChange={handleChangeProps} name="caption" className="h-8 w-full focus:outline-0 px-4 rounded border-slate-200 border-2 py-0 mr-2" />
              <input type="color" value={customizeProps.caption_color} name="caption_color" className="w-full  rounded  w-12 h-7 rounded-full" onChange={handleChangeProps} style={{ backgroundColor: customizeProps.caption_color, marginTop: '2px' }} />
            </div>
          </div>

          <label htmlFor="caption" className="font-500 mr-2 text-xs mb-1 inline-block mt-4 md:mt-6">Alignments</label>
          <div className="col-span-3 w-full flex justify-between items-center">
            <div className="flex w-full">
              <div className="w-full">
                <div className="flex items-center justify-between w-full mb-4 bg-white border-slate-200 border-2 rounded-md">
                  <img src={Halign} alt="Left" title="Left" className={`w-8 bg-white px-2 py-2 cursor-pointer`} style={{ border: customizeProps.caption_position_x === 'justify-start' ? `solid 3px black` : '' }} onClick={() => handleAlignPiker('justify-start', 'x')} />
                  <img src={Hcenter} alt="Center" title="Center" className="w-8 bg-white px-1 py-1 cursor-pointer" style={{ border: customizeProps.caption_position_x === 'justify-center' ? `solid 3px black` : '' }} onClick={() => handleAlignPiker('justify-center', 'x')} />
                  <img src={Halign} alt="Right" title="Right" className="rotate-180 w-8 bg-white px-2 py-2 cursor-pointer" style={{ border: customizeProps.caption_position_x === 'justify-end' ? `solid 3px black` : '' }} onClick={() => handleAlignPiker('justify-end', 'x')} />
                </div>
                <div className="flex items-center justify-between w-full bg-white border-slate-200 border-2 rounded-md">
                  <img src={Valign} alt="Top" title="Top" className="rotate-180 w-8 bg-white px-2 py-2 cursor-pointer" style={{ border: customizeProps.caption_position_y === 'items-start' ? `solid 3px black` : '' }} onClick={() => handleAlignPiker('items-start', 'y')} />

                  <img src={Vcenter} style={{ border: customizeProps.caption_position_y === 'items-center' ? `solid 3px black` : '' }} onClick={() => handleAlignPiker('items-center', 'y')} alt="Center" title="Center" className="w-8 bg-white px-1 py-1 cursor-pointer" />
                  <img src={Valign} style={{ border: customizeProps.caption_position_y === 'items-end' ? `solid 3px black` : '' }} onClick={() => handleAlignPiker('items-end', 'y')} alt="Bottom" title="Bottom" className="w-8 bg-white px-2 py-2 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>


          <label htmlFor="select size" className="font-500 mr-2 text-xs mb-1 inline-block  mt-4 md:mt-6">Choose size</label>
          <select name="size" value={customizeProps.size} onChange={handleChangeProps} className={`w-full focus:outline-0 px-4 rounded border-slate-200 border-2 h-8 col-span-3 ${selectInputColor && 'input-select'}`} >
            <option hidden value={0}>Select Size</option>
            <option value={110}>Small</option>
            <option value={120}>Medium</option>
            <option value={130}>Large</option>
            <option value={150}>Extra Large</option>
          </select>

          <label htmlFor="select size" className="font-500 mr-2 text-xs mb-1 inline-block  mt-4 md:mt-6">Choose color</label>
          <div className="col-span-3 w-full flex justify-between items-center mb-2">
            <input type="text" name="slate" onClick={() => handleColorPiker('#dc2626')} className="w-full focus:outline-0 rounded border-slate-200 border-2 bg-white w-8 h-8 rounded-full cursor-pointer bg-red-600 text-red-600" style={{ border: customizeProps.color === '#dc2626' ? `solid 3px black` : '' }} />
            <input type="text" name="slate" onClick={() => handleColorPiker('#ca8a04')} className="w-full focus:outline-0 rounded border-slate-200 border-2 bg-white w-8 h-8 rounded-full cursor-pointer bg-yellow-600 text-yellow-600" style={{ border: customizeProps.color === '#ca8a04' ? `solid 3px black` : '' }} />
            <input type="text" name="slate" onClick={() => handleColorPiker('#db2777')} className="w-full focus:outline-0 rounded border-slate-200 border-2 bg-white w-8 h-8 rounded-full cursor-pointer bg-pink-600 text-pink-600" style={{ border: customizeProps.color === '#db2777' ? `solid 3px black` : '' }} />
            <input type="text" name="slate" onClick={() => handleColorPiker('#2563eb')} className="w-full focus:outline-0 rounded border-slate-200 border-2 bg-white w-8 h-8 rounded-full cursor-pointer bg-blue-600 text-blue-600" style={{ border: customizeProps.color === '#2563eb' ? `solid 3px black` : '' }} />
            <input type="text" name="slate" onClick={() => handleColorPiker('#ea580c')} className="w-full focus:outline-0 rounded border-slate-200 border-2 bg-white w-8 h-8 rounded-full cursor-pointer bg-orange-600 text-orange-600" style={{ border: customizeProps.color === '#ea580c' ? `solid 3px black` : '' }} />
            <div className="flex items-center justify-center relative">
              <img src={ColorPiker} alt="color piker" className="absolute cursor-pointer" />
              <input type="color" name="color" onChange={handleChangeProps} className="w-full focus:outline-0 rounded border-slate-200 border-2 bg-white w-8 h-8 rounded-full cursor-pointer bg-blue-600 text-blue-600 z-10 cursor-pointer opacity-0" title="Pick your favourite color" />
            </div>
          </div>

          <div className="col-span-3 w-full flex justify-between items-center">
            <input type="text" name="slate" onClick={() => handleColorPiker('#16a34a')} className="w-full focus:outline-0 rounded border-slate-200 border-2 bg-white w-8 h-8 rounded-full cursor-pointer bg-green-600 text-green-600" style={{ border: customizeProps.color === '#16a34a' ? `solid 3px black` : '' }} />
            <input type="text" name="slate" onClick={() => handleColorPiker('#0891b2')} className="w-full focus:outline-0 rounded border-slate-200 border-2 bg-white w-8 h-8 rounded-full cursor-pointer bg-cyan-600 text-cyan-600" style={{ border: customizeProps.color === '#0891b2' ? `solid 3px black` : '' }} />
            <input type="text" name="slate" onClick={() => handleColorPiker('#4f46e5')} className="w-full focus:outline-0 rounded border-slate-200 border-2 bg-white w-8 h-8 rounded-full cursor-pointer bg-indigo-600 text-indigo-600" style={{ border: customizeProps.color === '#4f46e5' ? `solid 3px black` : '' }} />
            <input type="text" name="slate" onClick={() => handleColorPiker('#c026d3')} className="w-full focus:outline-0 rounded border-slate-200 border-2 bg-white w-8 h-8 rounded-full cursor-pointer bg-fuchsia-600 text-fuchsia-600" style={{ border: customizeProps.color === '#c026d3' ? `solid 3px black` : '' }} />
            <input type="text" name="slate" onClick={() => handleColorPiker('#65830d')} className="w-full focus:outline-0 rounded border-slate-200 border-2 bg-white w-8 h-8 rounded-full cursor-pointer bg-lime-600 text-lime-600" style={{ border: customizeProps.color === '#65830d' ? `solid 3px black` : '' }} />
            <input type="text" name="slate" onClick={() => handleColorPiker('#0284c7')} className="w-full focus:outline-0 rounded border-slate-200 border-2 bg-white w-8 h-8 rounded-full cursor-pointer bg-sky-600 text-sky-600" style={{ border: customizeProps.color === '#0284c7' ? `solid 3px black` : '' }} />
          </div>

          <div className="pt-10"></div>
          <hr />

          <label htmlFor="price" className="font-500 mr-2 text-xs mb-1 inline-block  mt-4 md:mt-7">Price</label>
          <b className="text-xs">{customizeProps.size > 0 ? `$${customizeProps.size}` : `$0`}</b>

          <div className="mt-5 md:mt-8">
            <div className="grid grid-cols-2 gap-3 col-span-3">
              <button disabled={customizeProps.size === 0} onClick={() => handleProduct('product')} type="button" className={`${customizeProps.size === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} rounded-md  py-2 flex items-center justify-center text-white  text-xs `}>
                Print it
                <img src={PrinterIcon} alt="Print" className="h-4 ml-2" />
              </button>
              <button disabled={customizeProps.size === 0} type="button" onClick={() => handleProduct('cart')} className={`${customizeProps.size === 0 ? 'bg-gray-400 cursor-not-allowed' : `bg-green-500 hover:bg-green-700`} rounded-md py-2 text-white flex items-center justify-center text-xs`}>
                Add to cart
                <img src={CartIcon} alt="Print" className="h-4 ml-2" />
              </button>
            </div>
          </div>
        </form>
      </div>
      <BillingDetails showPopUp={showPopUp} setshowPopUp={setshowPopUp} />
    </>
  );
}

export default Sidebar;
