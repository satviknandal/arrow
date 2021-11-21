import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useOutsideClick from "../../../common/UseOutsideClick";
import TextInput from "../Input/TextInput/TextInput";
import {
  handleClickEquivalentKeyDown,
  handleEscapeKeyDown,
} from "../../../common/utility";

const DropdownList = ({
  selected,
  list = [],
  inputId = "",
  path = "",
  isImage = false,
  isImageText = false,
  isText = true,
  onSelect,
  onFocus = () => {},
  onBlur = () => {},
  className = "",
  placeholderText = "",
}) => {
  const [inputValue, setInputValue] = useState("");
  const [imgClass, setImgClass] = useState("");
  const [selectedItem, setSelectedItem] = useState(selected);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownWrapperElRef = useRef(null);

  useOutsideClick(dropdownWrapperElRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  });

  useEffect(() => {
    let finalValue = "";
    if (selectedItem && Object.keys(selectedItem).length && path !== "") {
      list.length &&
        list.forEach((x) => {
          if (x[path] === selectedItem[path]) {
            finalValue = selectedItem[path];
          }
        });
    } else if (selectedItem && path === "") {
      finalValue = selectedItem;
    }
    setInputValue(finalValue);
    setImgClass(isImage || isImageText ? selectedItem?.class : "");
  }, [selectedItem]);

  useEffect(() => {
    setSelectedItem(selected);
  }, [selected]);

  const handleListItemClick = (itemObj) => {
    setSelectedItem(itemObj);
    onSelect(itemObj);
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={cx(`dropdown-list ${className} `, {
        "dropdown-list--expanded": isDropdownOpen,
      })}
      ref={dropdownWrapperElRef}
      role="button"
      tabIndex="-1"
      onKeyDown={(e) => handleEscapeKeyDown(e, () => setIsDropdownOpen(false))}
    >
      <TextInput
        type="text"
        value={inputValue}
        imgClass={imgClass}
        inputId={inputId}
        isImgInput={isImage || isImageText}
        placeholderText={placeholderText}
        isDropdownOpen={isDropdownOpen}
        onClick={handleDropdownClick}
        onFocus={onFocus}
        onBlur={onBlur}
        isReadOnly
        hasDropdownArrow
        onKeyDown={(e) =>
          handleClickEquivalentKeyDown(e, () => setIsDropdownOpen(true))
        }
      />
      <ul className="dropdown-list__list">
        {list && list.length > 0 ? (
          list.map((item, index) => (
            <li key={index}>
              {(isImage || isImageText) && (
                <div
                  className={cx(`flag ${item?.class}`)}
                  onClick={() => handleListItemClick(item)}
                ></div>
              )}
              {(isImageText || isText) && (
                <button
                  type="button"
                  onClick={() => handleListItemClick(item)}
                  disabled={item.disabled}
                >
                  {path === "" ? item : item[path]}
                </button>
              )}
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

DropdownList.propTypes = {
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  list: PropTypes.array.isRequired,
  inputId: PropTypes.string.isRequired,
  path: PropTypes.string,
  isImage: PropTypes.bool,
  isImageText: PropTypes.bool,
  isText: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  placeholderText: PropTypes.string,
};

export default DropdownList;
