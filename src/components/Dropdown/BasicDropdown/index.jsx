import React, { useState } from "react";
import S from './styled';

function BasicDropdown({ contents }) {
  const [dropdownState, setDropdownState] = useState("dropdown");

  const handleDropdownState = (content) => {
    if (!content) return;
    setDropdownState(content);
  }

  return (
    <div>
      <>
        <S.StyledUl>
          <S.DropDownLi>
            <S.Dropbtn onClick={() => handleDropdownState(dropdownState)}>{dropdownState}</S.Dropbtn>
            <S.DropDownContent>
              {contents.map((v) => {
                return (
                  <>
                    {" "}
                    < S.SubA onClick={() => handleDropdownState(v)}>{v}</S.SubA>
                  </>);
              })}
            </S.DropDownContent>
          </S.DropDownLi>
        </S.StyledUl>
      </>
    </div >
  );
}

export default BasicDropdown;