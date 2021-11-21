import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { filterArrowDownSvg, filterArrowUpSvg } from "../../../../icons";

const TextInput = ({
  type = "text",
  value = "",
  imgClass = "",
  inputId = "",
  placeholderText = "",
  customIcon = undefined,
  isImgInput = false,
  hasDropdownArrow = false,
  isReadOnly = false,
  isDropdownOpen,
  isDisabled = false,
  onClick = () => {},
  onFocus = () => {},
  onBlur = () => {},
  onChange,
  onKeyDown = () => {},
  onEnterPress = () => {},
  className = "",
  hasButton = false,
  buttonText = "",
  onButtonClick = () => {},
  maxLength,
  minLength,
}) => {
  return (
    <div
      className={cx(`st-text-input ${className}`, {
        "st-text-input--has-dropdown-arrow": hasDropdownArrow,
        "st-text-input--has-input-icon": !!customIcon,
        "st-text-input--has-button": hasButton,
      })}
    >
      {(hasDropdownArrow || customIcon) && (
        <span className="st-text-input__icon">
          {customIcon ||
            (isDropdownOpen
              ? filterArrowUpSvg
              : filterArrowDownSvg(isDisabled))}
        </span>
      )}
      {imgClass && (
        <div className={cx(`st-text-input--img flag ${imgClass}`)}></div>
      )}
      <input
        type={type}
        id={inputId}
        placeholder={placeholderText}
        value={value}
        readOnly={isReadOnly}
        disabled={isDisabled}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onEnterPress(e);
          }
        }}
        maxLength={maxLength}
        minLength={minLength}
        max={maxLength}
        min={minLength}
        className={cx(`st-text-input__input`, {
          "st-text-input__input--img": isImgInput,
        })}
        autoComplete="off"
      />
      {hasButton && (
        <div className="st-text-button-input__button">
          <div className="btn btn--primary-inverted">
            <button
              type="button"
              id="text-inputBtn"
              onClick={() => onButtonClick()}
            >
              {buttonText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  inputId: PropTypes.string,
  placeholderText: PropTypes.string,
  customIcon: PropTypes.node,
  hasDropdownArrow: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isDropdownOpen: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onEnterPress: PropTypes.func,
  className: PropTypes.string,
  hasButton: PropTypes.bool,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
};

export default TextInput;
