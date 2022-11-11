import React, { useContext , useState} from 'react';
import { createPopper } from '@popperjs/core';

export const selectContext = React.createContext();


const Dropdown = ({ color }) => {


 
    

  const [selected , setSelected] = useState("");

  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);

  const btnDropdownRef = React.createRef();

  const popoverDropdownRef = React.createRef();

  const selectedContext = useContext(selected);

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  
  let bgColor;
  color === 'white'
    ? (bgColor = 'bg-slate-700')
    : (bgColor = 'bg-' + color + '-500');

  const onClickHandler = (e) => {
    e.preventDefault();

    setSelected(e.target.value);

    closeDropdownPopover() ;
  }

  return (
    <>
      <div className="flex flex-wrap" >
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                'text-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ' +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              Languages
            </button>

            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? 'block ' : 'hidden ') +
                (color === 'white' ? 'bg-white ' : bgColor + ' ') +
                'text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1'
              }
              style={{ minWidth: '12rem' }}
            >
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent ' +
                  (color === 'white' ? ' text-slate-700' : 'text-white')
                }
                onClick={onClickHandler}
              >
                Python
              </a>

              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent ' +
                  (color === 'white' ? ' text-slate-700' : 'text-white')
                }
                onClick={onClickHandler}
              >
                C/C++
              </a>

              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent ' +
                  (color === 'white' ? ' text-slate-700' : 'text-white')
                }
                onClick={onClickHandler}
              >
                C#
              </a>

              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent ' +
                  (color === 'white' ? ' text-slate-700' : 'text-white')
                }
                onClick={onClickHandler}
              >
                Java
              </a>

              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent ' +
                  (color === 'white' ? ' text-slate-700' : 'text-white')
                }
                onClick={onClickHandler}
              >
                JavaScipt
              </a>

              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent ' +
                  (color === 'white' ? ' text-slate-700' : 'text-white')
                }
                onClick={onClickHandler}
              >
                Go
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="black" />
    </>
  );
}
