import {jsx as $kAGeC$jsx, jsxs as $kAGeC$jsxs, Fragment as $kAGeC$Fragment} from "react/jsx-runtime";
import {createContext as $kAGeC$createContext, useContext as $kAGeC$useContext, useState as $kAGeC$useState, useRef as $kAGeC$useRef, useEffect as $kAGeC$useEffect, useReducer as $kAGeC$useReducer} from "react";
import $kAGeC$intltelinput from "intl-tel-input";
import {useDropzone as $kAGeC$useDropzone} from "react-dropzone";
import {Root as $kAGeC$Root, Portal as $kAGeC$Portal, Overlay as $kAGeC$Overlay, Content as $kAGeC$Content, Title as $kAGeC$Title} from "@radix-ui/react-dialog";
import {Root as $kAGeC$Root1} from "@radix-ui/react-visually-hidden";




const $85a82239aebedd0d$export$3f655c770124f5e3 = {
    telephoneInitialCountry: "US",
    telephonePreferredCountries: [
        "us",
        "gb",
        "ca",
        "de",
        "au"
    ],
    telephoneAllowDropdown: true,
    telephoneAutoHideDialCode: false,
    telephoneAutoPlaceholder: "polite",
    telephoneCustomContainer: "",
    telephoneCustomPlaceholder: null,
    telephoneDropdownContainer: null,
    telephoneExcludeCountries: [],
    telephoneFormatOnDisplay: true,
    telephoneGeoIpLookup: null,
    telephoneHiddenInput: "",
    telephoneLocalizedCountries: null,
    telephoneNationalMode: false,
    telephoneOnlyCountries: [],
    telephonePlaceholderNumberType: "MOBILE",
    telephoneSeparateDialCode: true,
    // labels
    labelForm: "Application",
    labelSubmit: "Submit application",
    labelAdd: "Add",
    labelSave: "Save",
    labelCancel: "Cancel",
    labelEdit: "Edit",
    labelDelete: "Delete",
    labelClose: "Close",
    labelOptional: "(optional)",
    labelClear: "Clear",
    // dropzone
    labelDropzoneUpload: "Upload a file",
    labelDropzoneDragDrop: "or drag and drop here",
    labelDropzoneMaxSize: "Max file size is ",
    labelDropzoneAcceptableFileTypes: "Acceptable file types: ",
    labelDropzoneReplaceFile: "Replace file",
    labelDropzoneNoFilesAccepted: "No files accepted",
    labelDropzoneAborted: "File reading was aborted",
    labelDropzoneError: "File reading has failed",
    // icons
    iconCancel: ()=>/*#__PURE__*/ (0, $kAGeC$jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            children: /*#__PURE__*/ (0, $kAGeC$jsx)("path", {
                d: "M7.7574 7.7574 12 12.0001m0 0 4.2426 4.2426M12 12.0001l4.2426-4.2427M12 12.0001l-4.2426 4.2426",
                stroke: "currentColor",
                strokeWidth: "1.5"
            })
        }),
    iconCheck: ()=>/*#__PURE__*/ (0, $kAGeC$jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            children: /*#__PURE__*/ (0, $kAGeC$jsx)("path", {
                d: "M6.5 12.5 10 16l7.5-7.5",
                stroke: "currentColor",
                strokeWidth: "1.5"
            })
        }),
    iconEdit: ()=>/*#__PURE__*/ (0, $kAGeC$jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: 24,
            height: 24,
            children: [
                /*#__PURE__*/ (0, $kAGeC$jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    d: "M9 6.75H4.75v12.5h12.5V15"
                }),
                /*#__PURE__*/ (0, $kAGeC$jsx)("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    d: "M17.5 4.25l-7.25 7.25v2.75H13l7.24-7.26 -2.75-2.75Z"
                })
            ]
        }),
    iconDelete: ()=>/*#__PURE__*/ (0, $kAGeC$jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: 24,
            height: 24,
            children: /*#__PURE__*/ (0, $kAGeC$jsx)("path", {
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                d: "M7.25 7.75h9.5m-9.5 0v10.5h9.5V7.75m-9.5 0H5m11.75 0H19m-4.75 0v-3h-4.5v3"
            })
        }),
    iconClear: ()=>/*#__PURE__*/ (0, $kAGeC$jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: 24,
            height: 24,
            children: /*#__PURE__*/ (0, $kAGeC$jsx)("path", {
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                d: "M7.25 7.75h9.5m-9.5 0v10.5h9.5V7.75m-9.5 0H5m11.75 0H19m-4.75 0v-3h-4.5v3"
            })
        })
};
const $85a82239aebedd0d$export$a92f85ab3e9ad68b = $kAGeC$createContext($85a82239aebedd0d$export$3f655c770124f5e3);






const $8c21ad346eeeaf0b$export$b04be29aa201d4f5 = ({ label: label , required: required , slug: slug  })=>{
    const config = $kAGeC$useContext((0, $85a82239aebedd0d$export$a92f85ab3e9ad68b));
    return /*#__PURE__*/ (0, $kAGeC$jsx)("div", {
        className: "form-label-wrapper",
        children: /*#__PURE__*/ (0, $kAGeC$jsxs)("label", {
            className: "form-label",
            htmlFor: `field-${slug}`,
            children: [
                label,
                required ? /*#__PURE__*/ (0, $kAGeC$jsx)("span", {
                    className: "form-label__required",
                    children: "*"
                }) : /*#__PURE__*/ (0, $kAGeC$jsx)("span", {
                    className: "form-label__optional",
                    children: config.labelOptional
                })
            ]
        })
    });
};






const $ac0af2927eede513$export$bea8ebba691c5813 = ({ name: name , required: required , id: id , defaultValue: defaultValue , label: label , slug: slug  })=>{
    const config = (0, $kAGeC$useContext)((0, $85a82239aebedd0d$export$a92f85ab3e9ad68b));
    return /*#__PURE__*/ (0, $kAGeC$jsxs)("div", {
        className: "toggle-wrapper",
        children: [
            /*#__PURE__*/ (0, $kAGeC$jsxs)("div", {
                className: "toggle",
                children: [
                    /*#__PURE__*/ (0, $kAGeC$jsx)("input", {
                        type: "checkbox",
                        name: name,
                        required: required,
                        id: id,
                        defaultChecked: Boolean(defaultValue),
                        className: "toggle__input"
                    }),
                    /*#__PURE__*/ (0, $kAGeC$jsx)("span", {
                        className: "toggle__check",
                        children: config.iconCheck()
                    })
                ]
            }),
            /*#__PURE__*/ (0, $kAGeC$jsx)((0, $8c21ad346eeeaf0b$export$b04be29aa201d4f5), {
                label: label,
                slug: slug,
                required: required
            })
        ]
    });
};





const $019abc1650c6b5ef$export$56e87bf42978147a = ({ children: children  })=>{
    return /*#__PURE__*/ (0, $kAGeC$jsx)("div", {
        className: "form-field",
        children: /*#__PURE__*/ (0, $kAGeC$jsx)("div", {
            className: "form-field__wrapper",
            children: children
        })
    });
};



const $39b5fccd15b866b3$export$d1f826a06de665f2 = ({ count: count = 0 , maxLength: maxLength  })=>{
    if (!maxLength) return null;
    return /*#__PURE__*/ (0, $kAGeC$jsxs)("span", {
        className: "form-field__maxlength",
        children: [
            count,
            " / ",
            maxLength
        ]
    });
};


const $5c254f5ad56b1325$export$2c73285ae9390cec = ({ name: name , required: required , id: id , defaultValue: defaultValue , maxLength: maxLength  })=>{
    const [value, setValue] = (0, $kAGeC$useState)(null);
    return /*#__PURE__*/ (0, $kAGeC$jsxs)((0, $019abc1650c6b5ef$export$56e87bf42978147a), {
        children: [
            /*#__PURE__*/ (0, $kAGeC$jsx)("input", {
                type: "text",
                name: name,
                required: required,
                id: id,
                defaultValue: defaultValue,
                className: "form-field__text",
                maxLength: maxLength,
                onChange: (e)=>setValue(e.target.value)
            }),
            /*#__PURE__*/ (0, $kAGeC$jsx)((0, $39b5fccd15b866b3$export$d1f826a06de665f2), {
                count: value?.length,
                maxLength: maxLength
            })
        ]
    });
};






const $2a2bb62dd439fbec$export$301bf6213f61d17f = ({ name: name , required: required , id: id , defaultValue: defaultValue , maxLength: maxLength  })=>{
    const [value, setValue] = (0, $kAGeC$useState)(null);
    return /*#__PURE__*/ (0, $kAGeC$jsxs)((0, $019abc1650c6b5ef$export$56e87bf42978147a), {
        children: [
            /*#__PURE__*/ (0, $kAGeC$jsx)("textarea", {
                name: name,
                required: required,
                defaultValue: defaultValue,
                id: id,
                rows: 5,
                className: "form-field__textarea",
                maxLength: maxLength,
                onChange: (e)=>setValue(e.target.value)
            }),
            /*#__PURE__*/ (0, $kAGeC$jsx)((0, $39b5fccd15b866b3$export$d1f826a06de665f2), {
                count: value?.length,
                maxLength: maxLength
            })
        ]
    });
};



const $efc440b7d79555d2$export$6713ee24224a3285 = ({ children: children  })=>{
    return /*#__PURE__*/ (0, $kAGeC$jsx)("div", {
        className: "form-item",
        children: children
    });
};




const $5e0091be6f316fbb$export$d9781c7894a82487 = ({ name: name , required: required , id: id , defaultValue: defaultValue  })=>{
    return /*#__PURE__*/ (0, $kAGeC$jsx)((0, $019abc1650c6b5ef$export$56e87bf42978147a), {
        children: /*#__PURE__*/ (0, $kAGeC$jsx)("input", {
            type: "date",
            name: name,
            required: required,
            id: id,
            defaultValue: defaultValue,
            className: "form-field__text form-field__date"
        })
    });
};




const $b4a9c54c5ca291f9$export$63c5fa0b2fdccd2e = ({ name: name , required: required , id: id , defaultValue: defaultValue , maxLength: maxLength  })=>{
    return /*#__PURE__*/ (0, $kAGeC$jsx)((0, $019abc1650c6b5ef$export$56e87bf42978147a), {
        children: /*#__PURE__*/ (0, $kAGeC$jsx)("input", {
            type: "number",
            name: name,
            required: required,
            id: id,
            defaultValue: defaultValue,
            className: "form-field__text form-field__number",
            maxLength: maxLength
        })
    });
};







const $567d79d65fd789f9$export$bbb9a9f0dc629995 = ({ name: name , required: required , id: id , defaultValue: defaultValue , maxLength: maxLength  })=>{
    const inputRef = (0, $kAGeC$useRef)(null);
    const config = (0, $kAGeC$useContext)((0, $85a82239aebedd0d$export$a92f85ab3e9ad68b));
    const [dialCode, setDialCode] = (0, $kAGeC$useState)("");
    (0, $kAGeC$useEffect)(()=>{
        if (!inputRef.current) return;
        const iti = (0, $kAGeC$intltelinput)(inputRef.current, {
            initialCountry: config.telephoneInitialCountry,
            allowDropdown: config.telephoneAllowDropdown,
            autoHideDialCode: config.telephoneAutoHideDialCode,
            autoPlaceholder: config.telephoneAutoPlaceholder,
            customContainer: config.telephoneCustomContainer,
            customPlaceholder: config.telephoneCustomPlaceholder,
            dropdownContainer: config.telephoneDropdownContainer,
            excludeCountries: config.telephoneExcludeCountries,
            formatOnDisplay: config.telephoneFormatOnDisplay,
            geoIpLookup: config.telephoneGeoIpLookup,
            hiddenInput: config.telephoneHiddenInput,
            localizedCountries: config.telephoneLocalizedCountries,
            nationalMode: config.telephoneNationalMode,
            onlyCountries: config.telephoneOnlyCountries,
            placeholderNumberType: config.telephonePlaceholderNumberType,
            preferredCountries: config.telephonePreferredCountries,
            separateDialCode: config.telephoneSeparateDialCode,
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
        });
        const onCountryChange = ()=>{
            const countryData = iti.getSelectedCountryData();
            setDialCode(countryData.dialCode);
        };
        onCountryChange();
        inputRef.current.addEventListener("countrychange", onCountryChange);
        ()=>{
            iti.destroy();
            inputRef.current.removeEventListener("countrychange", onCountryChange);
        };
    }, []);
    return /*#__PURE__*/ (0, $kAGeC$jsxs)((0, $019abc1650c6b5ef$export$56e87bf42978147a), {
        children: [
            /*#__PURE__*/ (0, $kAGeC$jsx)("input", {
                type: "tel",
                ref: inputRef,
                name: name,
                required: required,
                id: id,
                defaultValue: defaultValue,
                maxLength: maxLength,
                className: "form-field__text form-field__telephone"
            }),
            /*#__PURE__*/ (0, $kAGeC$jsx)("input", {
                type: "hidden",
                name: `${name}_dialcode`,
                value: dialCode,
                readOnly: true
            })
        ]
    });
};
var $567d79d65fd789f9$export$2e2bcd8739ae039 = $567d79d65fd789f9$export$bbb9a9f0dc629995;






const $d25602dc633d5238$export$d61c19f03375c53e = ({ name: name , field: field  })=>{
    const config = (0, $kAGeC$useContext)((0, $85a82239aebedd0d$export$a92f85ab3e9ad68b));
    const IS_IMAGE = Boolean(field.supported_file_types.filter((x)=>[
            "jpg",
            "jpeg",
            "gif",
            "png"
        ].includes(x)).length);
    const [state, setState] = (0, $kAGeC$useState)("initial");
    const [image, setImage] = (0, $kAGeC$useState)(null);
    const [message, setMessage] = (0, $kAGeC$useState)("");
    const [fileBase64, setFileBase64] = (0, $kAGeC$useState)("");
    const { acceptedFiles: acceptedFiles , getRootProps: getRootProps , getInputProps: getInputProps , inputRef: inputRef  } = (0, $kAGeC$useDropzone)({
        maxFiles: 1,
        multiple: false,
        maxSize: field.max_file_size,
        accept: {
            "application/octet-stream": field.supported_file_types.map((ext)=>`.${ext}`)
        },
        onDrop: (acceptedFiles)=>{
            setState("loading");
            if (!acceptedFiles.length) {
                setMessage(config.labelDropzoneNoFilesAccepted);
                setState("error");
                return;
            }
            acceptedFiles.forEach((file)=>{
                const reader = new FileReader();
                reader.onabort = ()=>{
                    reset();
                    setMessage(config.labelDropzoneAborted);
                    setState("error");
                };
                reader.onerror = ()=>{
                    reset();
                    setMessage(config.labelDropzoneError);
                    setState("error");
                };
                reader.onload = ()=>{
                    setFileBase64(reader.result.toString().split("base64,")[1]);
                    setState("success");
                };
                reader.readAsDataURL(file);
            });
            setImage(acceptedFiles.map((file)=>Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))[0]);
        }
    });
    const reset = ()=>{
        if (image) URL.revokeObjectURL(image.preview);
        setFileBase64("");
    };
    (0, $kAGeC$useEffect)(()=>{
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return ()=>reset();
    }, []);
    const onClear = (e)=>{
        e.preventDefault();
        acceptedFiles.length = 0;
        acceptedFiles.splice(0, acceptedFiles.length);
        inputRef.current.value = "";
        setImage(null);
        setState("initial");
        setMessage("");
    };
    return /*#__PURE__*/ (0, $kAGeC$jsxs)((0, $kAGeC$Fragment), {
        children: [
            /*#__PURE__*/ (0, $kAGeC$jsx)("button", {
                type: "button",
                "data-action": "remove-entry",
                onClick: onClear,
                style: {
                    display: "none"
                }
            }),
            /*#__PURE__*/ (0, $kAGeC$jsxs)("div", {
                ...getRootProps({
                    className: "dropzone"
                }),
                "data-state": state,
                children: [
                    /*#__PURE__*/ (0, $kAGeC$jsx)("input", {
                        ...getInputProps()
                    }),
                    /*#__PURE__*/ (0, $kAGeC$jsx)("textarea", {
                        name: name,
                        style: {
                            display: "none"
                        },
                        "data-filename": acceptedFiles?.[0]?.name,
                        value: fileBase64,
                        readOnly: true
                    }),
                    acceptedFiles.length > 0 ? /*#__PURE__*/ (0, $kAGeC$jsxs)((0, $kAGeC$Fragment), {
                        children: [
                            IS_IMAGE && image && /*#__PURE__*/ (0, $kAGeC$jsx)("img", {
                                style: {
                                    maxWidth: 240
                                },
                                src: image.preview,
                                onLoad: ()=>{
                                    URL.revokeObjectURL(image.preview);
                                }
                            }, image.name),
                            !IS_IMAGE && acceptedFiles.map((file)=>/*#__PURE__*/ (0, $kAGeC$jsx)("p", {
                                    children: file.name
                                }, file.name)),
                            /*#__PURE__*/ (0, $kAGeC$jsxs)("p", {
                                className: "dropzone__label",
                                children: [
                                    /*#__PURE__*/ (0, $kAGeC$jsx)("span", {
                                        children: config.labelDropzoneReplaceFile
                                    }),
                                    " ",
                                    config.labelDropzoneDragDrop
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0, $kAGeC$jsxs)((0, $kAGeC$Fragment), {
                        children: [
                            /*#__PURE__*/ (0, $kAGeC$jsxs)("p", {
                                className: "dropzone__label",
                                children: [
                                    /*#__PURE__*/ (0, $kAGeC$jsx)("span", {
                                        children: config.labelDropzoneUpload
                                    }),
                                    " ",
                                    config.labelDropzoneDragDrop
                                ]
                            }),
                            /*#__PURE__*/ (0, $kAGeC$jsx)("p", {
                                className: "dropzone__info",
                                children: field.max_file_size && `${config.labelDropzoneMaxSize} ${Math.floor(field.max_file_size / 1000000)}Mb. Acceptable file types .
              ${field.supported_file_types.join(", .")}.`
                            })
                        ]
                    }),
                    state === "loading" && /*#__PURE__*/ (0, $kAGeC$jsxs)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, $kAGeC$jsx)("style", {
                                dangerouslySetInnerHTML: {
                                    __html: `
                .spinner_b2T7{animation:spinner_xe7Q .8s linear infinite}.spinner_YRVV{animation-delay:-.65s}.spinner_c9oY{animation-delay:-.5s}@keyframes spinner_xe7Q{93.75%,100%{r:3px}46.875%{r:.2px}}`
                                }
                            }),
                            /*#__PURE__*/ (0, $kAGeC$jsx)("circle", {
                                className: "spinner_b2T7",
                                cx: "4",
                                cy: "12",
                                r: "3"
                            }),
                            /*#__PURE__*/ (0, $kAGeC$jsx)("circle", {
                                className: "spinner_b2T7 spinner_YRVV",
                                cx: "12",
                                cy: "12",
                                r: "3"
                            }),
                            /*#__PURE__*/ (0, $kAGeC$jsx)("circle", {
                                className: "spinner_b2T7 spinner_c9oY",
                                cx: "20",
                                cy: "12",
                                r: "3"
                            })
                        ]
                    }),
                    message && /*#__PURE__*/ (0, $kAGeC$jsx)("p", {
                        className: "dropzone__message",
                        children: message
                    })
                ]
            })
        ]
    });
};
var $d25602dc633d5238$export$2e2bcd8739ae039 = $d25602dc633d5238$export$d61c19f03375c53e;











const $44aa9bf139b40f61$export$353f5b6fc5456de1 = ({ onClick: onClick , theme: theme = "primary" , type: type = "button" , size: size = "md" , children: children , style: style , disabled: disabled , className: className = "" , ...props })=>{
    return /*#__PURE__*/ (0, $kAGeC$jsx)("button", {
        type: type,
        onClick: onClick,
        className: `button button--${theme} button--${size} button--${disabled ? "disabled" : "enabled"} ${className}`,
        style: style,
        disabled: disabled,
        ...props,
        children: children
    });
};



const $c9252567ca2cc175$export$e154be390aa0e14 = ({ name: name , children: children , displayClearButton: displayClearButton = true  })=>{
    const config = (0, $kAGeC$useContext)((0, $85a82239aebedd0d$export$a92f85ab3e9ad68b));
    const fieldsetRef = (0, $kAGeC$useRef)(null);
    const onClear = ()=>{
        const inputs = fieldsetRef.current.querySelectorAll("input, textarea, select");
        inputs.forEach((input)=>{
            if (input.type === "checkbox" || input.type === "radio") input.checked = false;
            else input.value = "";
            input.dispatchEvent(new Event("change"));
        });
        const removeComplexMultipleEntries = fieldsetRef.current.querySelectorAll('[data-action="remove-entry"]');
        removeComplexMultipleEntries.forEach((button)=>{
            button.click();
        });
    };
    return /*#__PURE__*/ (0, $kAGeC$jsxs)("fieldset", {
        className: "form-fieldset",
        ref: fieldsetRef,
        children: [
            name && /*#__PURE__*/ (0, $kAGeC$jsxs)("legend", {
                className: "form-legend",
                children: [
                    /*#__PURE__*/ (0, $kAGeC$jsx)("span", {
                        className: "form-legend__title",
                        children: name
                    }),
                    displayClearButton && /*#__PURE__*/ (0, $kAGeC$jsx)("span", {
                        className: "form-legend__clear",
                        children: /*#__PURE__*/ (0, $kAGeC$jsxs)((0, $44aa9bf139b40f61$export$353f5b6fc5456de1), {
                            type: "button",
                            theme: "ghost",
                            onClick: onClear,
                            children: [
                                config.iconClear(),
                                config.labelClear
                            ]
                        })
                    })
                ]
            }),
            children
        ]
    });
};



const $04d005139976c792$export$e8c699c108165025 = ({ name: name , field: field  })=>{
    const config = (0, $kAGeC$useContext)((0, $85a82239aebedd0d$export$a92f85ab3e9ad68b));
    const [state, setState] = (0, $kAGeC$useState)("initial");
    const formRef = (0, $kAGeC$useRef)(null);
    const hiddenValueFieldRef = (0, $kAGeC$useRef)(null);
    const [editingEntryId, setEditingEntryId] = (0, $kAGeC$useState)(null);
    const entryId = (0, $kAGeC$useRef)(0);
    /**
   * entries is an array of objects that looks like this:
   * [{
   *  id: "entry-1",
   *  type: "add",
   *  data: {
   *  "entry-1": {
   *    key: "firstname",
   *    value: "John",
   *    label: "First Name"
   * }]
   */ const [entries, updateEntries] = (0, $kAGeC$useReducer)((data, action)=>{
        const index = data.findIndex(({ id: id  })=>id === action.id);
        let newData = [
            ...data
        ];
        switch(action.type){
            case "add":
                return [
                    ...data,
                    action
                ];
            case "remove":
                newData.splice(index, 1);
                return newData;
            case "edit":
                newData.splice(index, 1, action);
                return newData;
        }
    }, []);
    /**
   * Save when the 'save' button is clicked
   * it can either be a 'save' or an 'edit' action
   */ const onSave = ()=>{
        if (!hiddenValueFieldRef.current) return;
        if (!formRef) return;
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());
        const action = !editingEntryId ? {
            id: `entry-${++entryId.current}`,
            type: "add",
            data: {}
        } : {
            id: editingEntryId,
            type: "edit",
            data: {}
        };
        Object.entries(data).forEach(([key, value])=>{
            const matchingField = field.fields.find((f)=>f.key === key);
            if (!value.trim().length) return;
            action.data[key] = {
                key: key,
                value: value,
                label: matchingField.label
            };
        });
        updateEntries(action);
        setState("initial");
        setEditingEntryId(null);
    };
    return /*#__PURE__*/ (0, $kAGeC$jsxs)((0, $kAGeC$Fragment), {
        children: [
            /*#__PURE__*/ (0, $kAGeC$jsx)("input", {
                type: "hidden",
                name: name,
                value: JSON.stringify(entries),
                ref: hiddenValueFieldRef,
                onChange: (e)=>updateEntries(JSON.parse(e.target.value))
            }),
            Boolean(entries.length) && /*#__PURE__*/ (0, $kAGeC$jsx)("div", {
                className: "complex-multiple__entries",
                children: entries.map((entry)=>{
                    return /*#__PURE__*/ (0, $kAGeC$jsxs)("div", {
                        className: "complex-multiple__entry",
                        children: [
                            /*#__PURE__*/ (0, $kAGeC$jsx)("table", {
                                className: "complex-multiple__entry-table",
                                children: /*#__PURE__*/ (0, $kAGeC$jsx)("tbody", {
                                    children: Object.entries(entry.data).map(([key, value])=>/*#__PURE__*/ (0, $kAGeC$jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, $kAGeC$jsx)("th", {
                                                    children: value.label
                                                }),
                                                value.value === "on" ? /*#__PURE__*/ (0, $kAGeC$jsx)("td", {
                                                    children: config.iconCheck()
                                                }) : /*#__PURE__*/ (0, $kAGeC$jsx)("td", {
                                                    children: value.value
                                                })
                                            ]
                                        }, key))
                                })
                            }),
                            /*#__PURE__*/ (0, $kAGeC$jsxs)("div", {
                                className: "complex-multiple__entry-actions",
                                children: [
                                    /*#__PURE__*/ (0, $kAGeC$jsxs)((0, $44aa9bf139b40f61$export$353f5b6fc5456de1), {
                                        type: "button",
                                        theme: "ghost",
                                        onClick: ()=>{
                                            setEditingEntryId(entry.id);
                                            setState("dialog");
                                        },
                                        children: [
                                            config.iconEdit(),
                                            /*#__PURE__*/ (0, $kAGeC$jsx)($kAGeC$Root1, {
                                                children: config.labelEdit
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $kAGeC$jsxs)((0, $44aa9bf139b40f61$export$353f5b6fc5456de1), {
                                        type: "button",
                                        theme: "ghost",
                                        "data-action": "remove-entry",
                                        onClick: ()=>updateEntries({
                                                id: entry.id,
                                                type: "remove"
                                            }),
                                        children: [
                                            config.iconDelete(),
                                            /*#__PURE__*/ (0, $kAGeC$jsx)($kAGeC$Root1, {
                                                children: config.labelDelete
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, entry.id);
                })
            }),
            /*#__PURE__*/ (0, $kAGeC$jsx)("div", {
                className: "complex-multiple__add",
                children: /*#__PURE__*/ (0, $kAGeC$jsx)((0, $44aa9bf139b40f61$export$353f5b6fc5456de1), {
                    type: "button",
                    onClick: ()=>setState("dialog"),
                    children: config.labelAdd
                })
            }),
            /*#__PURE__*/ (0, $kAGeC$jsx)($kAGeC$Root, {
                open: state === "dialog",
                children: /*#__PURE__*/ (0, $kAGeC$jsxs)($kAGeC$Portal, {
                    children: [
                        /*#__PURE__*/ (0, $kAGeC$jsx)($kAGeC$Overlay, {
                            className: "dialog-overlay"
                        }),
                        /*#__PURE__*/ (0, $kAGeC$jsx)($kAGeC$Content, {
                            className: "dialog-content application-form-dialog",
                            onEscapeKeyDown: ()=>setState("initial"),
                            onPointerDownOutside: ()=>setState("initial"),
                            onInteractOutside: ()=>setState("initial"),
                            children: /*#__PURE__*/ (0, $kAGeC$jsxs)("div", {
                                className: "dialog-content__form",
                                children: [
                                    /*#__PURE__*/ (0, $kAGeC$jsx)($kAGeC$Root1, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, $kAGeC$jsx)($kAGeC$Title, {
                                            className: "dialog-title",
                                            children: editingEntryId ? config.labelEdit : config.labelAdd
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $kAGeC$jsx)((0, $44aa9bf139b40f61$export$353f5b6fc5456de1), {
                                        "aria-label": config.labelClose,
                                        onClick: ()=>setState("initial"),
                                        theme: "tertiary",
                                        className: "dialog-content__close",
                                        children: config.iconCancel()
                                    }),
                                    /*#__PURE__*/ (0, $kAGeC$jsx)("form", {
                                        className: "complex-multiple__form",
                                        ref: formRef,
                                        children: /*#__PURE__*/ (0, $kAGeC$jsxs)((0, $c9252567ca2cc175$export$e154be390aa0e14), {
                                            name: field.label,
                                            displayClearButton: false,
                                            children: [
                                                field.fields.map((subfield)=>{
                                                    const editingEntry = {
                                                        ...entries.find(({ id: id  })=>id === editingEntryId)
                                                    };
                                                    return /*#__PURE__*/ (0, $kAGeC$jsx)((0, $5f97fa913381518e$export$a455218a85c89869), {
                                                        name: subfield.key,
                                                        field: {
                                                            ...subfield,
                                                            name: subfield.key,
                                                            label: subfield.label,
                                                            slug: subfield.key,
                                                            value: editingEntryId && editingEntry ? editingEntry.data[subfield.key]?.value : null
                                                        }
                                                    }, subfield.key);
                                                }),
                                                /*#__PURE__*/ (0, $kAGeC$jsxs)("div", {
                                                    className: "button-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, $kAGeC$jsx)((0, $44aa9bf139b40f61$export$353f5b6fc5456de1), {
                                                            type: "button",
                                                            onClick: ()=>onSave(),
                                                            children: config.labelSave
                                                        }),
                                                        /*#__PURE__*/ (0, $kAGeC$jsx)((0, $44aa9bf139b40f61$export$353f5b6fc5456de1), {
                                                            type: "button",
                                                            theme: "tertiary",
                                                            onClick: ()=>{
                                                                setEditingEntryId(null);
                                                                setState("initial");
                                                            },
                                                            children: config.labelCancel
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
var $04d005139976c792$export$2e2bcd8739ae039 = $04d005139976c792$export$e8c699c108165025;




const $0143f6c1ceb5f8e3$export$d55b50a564d0b931 = ({ name: name , required: required , id: id , defaultValue: defaultValue , choices: choices  })=>{
    return /*#__PURE__*/ (0, $kAGeC$jsx)((0, $019abc1650c6b5ef$export$56e87bf42978147a), {
        children: /*#__PURE__*/ (0, $kAGeC$jsxs)("select", {
            className: "form-field__select",
            name: name,
            required: required,
            id: id,
            defaultValue: defaultValue,
            children: [
                /*#__PURE__*/ (0, $kAGeC$jsx)("option", {
                    value: null
                }),
                choices?.map((choice)=>{
                    return /*#__PURE__*/ (0, $kAGeC$jsx)("option", {
                        value: choice.id,
                        children: choice.body
                    }, choice.id);
                })
            ]
        })
    });
};



const $4281023bca8fc1fc$export$fc4f3719f31d1e79 = ({ name: name , required: required , id: id , choices: choices , multiple: multiple  })=>{
    return /*#__PURE__*/ (0, $kAGeC$jsx)("fieldset", {
        className: "form-field__choice-fieldset",
        children: choices?.map((choice)=>{
            return /*#__PURE__*/ (0, $kAGeC$jsxs)("div", {
                className: "form-field__choice-wrapper",
                children: [
                    /*#__PURE__*/ (0, $kAGeC$jsx)("input", {
                        type: multiple ? "checkbox" : "radio",
                        name: name,
                        id: `${id}${choice.id}`,
                        value: choice.id,
                        className: "form-field__choice"
                    }),
                    /*#__PURE__*/ (0, $kAGeC$jsx)("label", {
                        htmlFor: `${id}${choice.id}`,
                        children: choice.body
                    })
                ]
            }, choice.id);
        })
    });
};



const $5f97fa913381518e$export$a455218a85c89869 = ({ name: name , field: field  })=>{
    if (!field) {
        console.log(`Missing field: ${name}`);
        return null;
    }
    const inputProps = {
        name: field.name,
        required: field.required,
        id: `field-${field.slug}`,
        defaultValue: field.value
    };
    if ("max_length" in field) inputProps.maxLength = field.max_length;
    if ("choices" in field) inputProps.choices = field.choices;
    if ("single_answer" in field) inputProps.multiple = !field.single_answer;
    let Component;
    switch(field.type){
        case "free_text":
            Component = ()=>/*#__PURE__*/ (0, $kAGeC$jsx)((0, $2a2bb62dd439fbec$export$301bf6213f61d17f), {
                    ...inputProps
                });
            break;
        case "file":
            Component = ()=>/*#__PURE__*/ (0, $kAGeC$jsx)((0, $d25602dc633d5238$export$d61c19f03375c53e), {
                    name: field.slug,
                    field: field
                });
            break;
        case "boolean":
            Component = ()=>/*#__PURE__*/ (0, $kAGeC$jsx)((0, $ac0af2927eede513$export$bea8ebba691c5813), {
                    ...inputProps,
                    label: field.label,
                    slug: field.slug
                });
            break;
        case "date":
            Component = ()=>/*#__PURE__*/ (0, $kAGeC$jsx)((0, $5e0091be6f316fbb$export$d9781c7894a82487), {
                    ...inputProps
                });
            break;
        case "multiple_choice":
            Component = ()=>/*#__PURE__*/ (0, $kAGeC$jsx)((0, $4281023bca8fc1fc$export$fc4f3719f31d1e79), {
                    ...inputProps
                });
            break;
        case "dropdown":
            Component = ()=>/*#__PURE__*/ (0, $kAGeC$jsx)((0, $0143f6c1ceb5f8e3$export$d55b50a564d0b931), {
                    ...inputProps
                });
            break;
        case "numeric":
            Component = ()=>/*#__PURE__*/ (0, $kAGeC$jsx)((0, $b4a9c54c5ca291f9$export$63c5fa0b2fdccd2e), {
                    ...inputProps
                });
            break;
        case "complex":
            if (field.multiple) Component = ()=>/*#__PURE__*/ (0, $kAGeC$jsx)((0, $04d005139976c792$export$e8c699c108165025), {
                    name: name,
                    field: field
                });
            else Component = ()=>/*#__PURE__*/ (0, $kAGeC$jsx)("div", {
                    children: "complex simple (not implemented)"
                });
            break;
        default:
            Component = ()=>/*#__PURE__*/ (0, $kAGeC$jsx)((0, $5c254f5ad56b1325$export$2c73285ae9390cec), {
                    ...inputProps
                });
    }
    if (field.name === "phone") Component = ()=>/*#__PURE__*/ (0, $kAGeC$jsx)((0, $567d79d65fd789f9$export$bbb9a9f0dc629995), {
            ...inputProps
        });
    if (field.type === "boolean") return /*#__PURE__*/ (0, $kAGeC$jsx)((0, $efc440b7d79555d2$export$6713ee24224a3285), {
        children: Component && /*#__PURE__*/ (0, $kAGeC$jsx)(Component, {})
    });
    return /*#__PURE__*/ (0, $kAGeC$jsxs)((0, $efc440b7d79555d2$export$6713ee24224a3285), {
        children: [
            /*#__PURE__*/ (0, $kAGeC$jsx)((0, $8c21ad346eeeaf0b$export$b04be29aa201d4f5), {
                label: field.label,
                slug: field.slug,
                required: field.required
            }),
            Component && /*#__PURE__*/ (0, $kAGeC$jsx)(Component, {})
        ]
    });
};





const $0f0ded933cb6fec6$export$564cbe3426fc093a = ({ children: children  })=>{
    return /*#__PURE__*/ (0, $kAGeC$jsx)("div", {
        className: "button-row",
        children: children
    });
};





const $c41d787fa8dc8d5a$export$a8a3e93435678ff9 = ({ children: children , as: as = "h2"  })=>{
    const Element = as;
    return /*#__PURE__*/ (0, $kAGeC$jsx)(Element, {
        className: `heading heading--${as}`,
        children: children
    });
};



const $163a5ab7286b1d28$export$a7fed597f4b8afd8 = ({ children: children , onSubmit: onSubmit  })=>{
    const [state, setState] = $kAGeC$useState("initial");
    const [error, setError] = $kAGeC$useState(null);
    const config = $kAGeC$useContext((0, $85a82239aebedd0d$export$a92f85ab3e9ad68b));
    const handleSubmit = (event)=>{
        setState("saving");
        setError(null);
        onSubmit(event, (error)=>{
            if (error) {
                setError(error);
                setState("error");
            } else setState("complete");
        });
    };
    return /*#__PURE__*/ (0, $kAGeC$jsxs)("form", {
        className: `form--${state}`,
        onSubmit: handleSubmit,
        encType: "multipart/form-data",
        children: [
            config.labelForm && /*#__PURE__*/ (0, $kAGeC$jsx)((0, $c41d787fa8dc8d5a$export$a8a3e93435678ff9), {
                as: "h1",
                children: config.labelForm
            }),
            children,
            /*#__PURE__*/ (0, $kAGeC$jsx)("p", {
                className: `form__error ${error ? "enabled" : "disabled"}`,
                onClick: ()=>setError(null),
                children: error
            })
        ]
    });
};


/**
 * Clean form data
 * - checkboxes are stored as "on" or "off"
 * - complex fields are stored as json
 */ const $fab42eb3dee39b5b$export$9ede6ba874448640 = (data)=>{
    const cleanedData = {};
    Object.keys(data).forEach((key)=>{
        let value = data[key];
        // parse complex fields that are already stored as json
        try {
            value = JSON.parse(value);
        } catch (e) {}
        // arrays
        if (Array.isArray(value)) {
            cleanedData[key] = value.map((item)=>{
                if (typeof item === "object" && item !== null) {
                    if ("value" in value) return $fab42eb3dee39b5b$export$33f062f47f21a01(value.value);
                    if ("data" in item) {
                        const cleanedData = {};
                        Object.keys(item.data).forEach((key)=>{
                            cleanedData[key] = $fab42eb3dee39b5b$export$33f062f47f21a01(item.data[key].value);
                        });
                        return cleanedData;
                    }
                    return $fab42eb3dee39b5b$export$9ede6ba874448640(item);
                }
                return $fab42eb3dee39b5b$export$33f062f47f21a01(item);
            });
            return;
        }
        cleanedData[key] = $fab42eb3dee39b5b$export$33f062f47f21a01(value);
    });
    return cleanedData;
};
const $fab42eb3dee39b5b$export$33f062f47f21a01 = (value)=>{
    // empty values
    if (typeof value === "string" && value.trim().length === 0) return;
    // checkboxes
    if (value === "on" || value === "off") return value === "on" ? true : false;
    return value;
};
const $fab42eb3dee39b5b$export$7a4712243be385f2 = (data, formFields, questions)=>{
    const candidate = {
        name: data.name,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        headline: data.headline,
        summary: data.summary,
        address: data.address,
        avatar: data.avatar,
        phone: data.phone ? `+${data.phone_dialcode}${data.phone}` : undefined,
        cover_letter: data.cover_letter,
        education_entries: data.education,
        experience_entries: data.experience,
        answers: [],
        skills: data.skills,
        tags: data.tags,
        disqualified: data.disqualified,
        disqualification_reason: data.disqualification_reason,
        disqualified_at: data.disqualified_at,
        social_profiles: data.social_profiles,
        domain: data.domain,
        recruiter_key: data.recruiter_key
    };
    // find form fields that are not yet in the object
    const missingFields = formFields.filter((field)=>!Object.keys(candidate).includes(field.key));
    // add answers
    missingFields.forEach((question)=>{
        const value = data[question.key];
        if (value) // "string" | "free_text" | "file" | "boolean" | "date" | "complex"
        switch(question.type){
            case "string":
                const stringAnswer = {
                    question_key: question.key,
                    body: value
                };
                candidate.answers.push(stringAnswer);
                break;
            case "free_text":
                const freetextAnswer = {
                    question_key: question.key,
                    body: value
                };
                candidate.answers.push(freetextAnswer);
                break;
            case "boolean":
                const booleanAnswer = {
                    question_key: question.key,
                    checked: value
                };
                candidate.answers.push(booleanAnswer);
                break;
            case "date":
                const dateAnswer = {
                    question_key: question.key,
                    date: value
                };
                candidate.answers.push(dateAnswer);
                break;
            case "file":
                const fileAnswer = {
                    question_key: question.key,
                    name: question.key,
                    file_url: "https://faces-img.xcdn.link/image-lorem-face-4053.jpg"
                };
                candidate.answers.push(fileAnswer);
                break;
        }
    });
    // find questions that are not yet in the object
    const missingQuestions = questions.filter((question)=>!Object.keys(candidate).includes(question.id));
    // add answers;
    missingQuestions.forEach((question)=>{
        const value = data[question.id];
        if (value) // "short_text" | "free_text" | "multiple_choice" | "boolean" | "dropdown" | "numeric" | "date" | "file";
        switch(question.type){
            case "short_text":
                const shortTextAnswer = {
                    question_key: question.id,
                    body: value
                };
                candidate.answers.push(shortTextAnswer);
                break;
            case "free_text":
                const freetextAnswer = {
                    question_key: question.id,
                    body: value
                };
                candidate.answers.push(freetextAnswer);
                break;
            case "multiple_choice":
                const multipleChoiceAnswer = {
                    question_key: question.id,
                    choices: value
                };
                candidate.answers.push(multipleChoiceAnswer);
                break;
            case "boolean":
                const booleanAnswer = {
                    question_key: question.id,
                    checked: value
                };
                candidate.answers.push(booleanAnswer);
                break;
            case "dropdown":
                const dropdownAnswer = {
                    question_key: question.id,
                    choices: value
                };
                candidate.answers.push(dropdownAnswer);
                break;
            case "date":
                const dateAnswer = {
                    question_key: question.id,
                    date: value
                };
                candidate.answers.push(dateAnswer);
                break;
            case "numeric":
                const numericAnswer = {
                    question_key: question.id,
                    value: +value
                };
                candidate.answers.push(numericAnswer);
                break;
            case "file":
                const fileAnswer = {
                    question_key: question.id,
                    file_url: "https://faces-img.xcdn.link/image-lorem-face-4053.jpg"
                };
                candidate.answers.push(fileAnswer);
                break;
        }
    });
    // remove undefined values
    Object.keys(candidate).forEach((key)=>candidate[key] === undefined ? delete candidate[key] : {});
    return candidate;
};



const $e29047879edbebee$export$885291568461564a = "...";
const $e29047879edbebee$export$60413e28724d3abd = ({ formFields: formFields = [] , questions: questions = [] , config: config = {} , fieldsets: fieldsets = [] , onSave: onSave = ()=>{}  })=>{
    // get all fields from the form
    const allFields = (formFields || []).map((field)=>({
            ...field,
            name: field.key,
            label: field.label,
            slug: field.key
        }));
    const allQuestions = (questions || []).map((field)=>({
            ...field,
            name: field.id,
            label: field.body,
            slug: field.id
        }));
    const allFormFields = [
        ...allFields,
        ...allQuestions
    ];
    const handleSubmit = (event, cb)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const entries = Object.fromEntries(formData.entries());
        const allValues = {};
        Object.keys(entries).forEach((key)=>{
            const question = questions.find((q)=>q.id === key);
            if (question?.type === "multiple_choice" || question?.type === "dropdown") allValues[key] = formData.getAll(key);
            else allValues[key] = formData.get(key);
        });
        const cleanData = (0, $fab42eb3dee39b5b$export$9ede6ba874448640)(allValues);
        const workableCandidate = (0, $fab42eb3dee39b5b$export$7a4712243be385f2)(cleanData, formFields, questions);
        onSave(workableCandidate, (error)=>{
            if (error) cb(error);
            else cb();
        });
        return false;
    };
    // if no fieldsets are defined, add all fields to a single fieldset
    if (!fieldsets.length) fieldsets.push({
        name: "",
        fields: allFormFields.map((field)=>field.name)
    });
    // if ... is not present in fieldsets add it to the end
    if (!fieldsets.some((fieldset)=>fieldset.fields.some((field)=>field === $e29047879edbebee$export$885291568461564a))) fieldsets[fieldsets.length - 1].fields.push($e29047879edbebee$export$885291568461564a);
    const definedFieldsets = fieldsets.map((fieldset)=>{
        return {
            name: fieldset.name,
            fields: fieldset.fields.map((field)=>{
                if (field === $e29047879edbebee$export$885291568461564a) return $e29047879edbebee$export$885291568461564a;
                const fieldsetField = allFormFields.find(({ name: name  })=>name === field);
                if (fieldsetField) {
                    allFormFields.splice(allFormFields.indexOf(fieldsetField), 1);
                    return fieldsetField;
                }
                return null;
            }).flat().filter(Boolean)
        };
    });
    // replace fieldset field named "..." with the remaining fields
    const allFieldsets = definedFieldsets.map((fieldset)=>{
        const restOfFieldsField = fieldset.fields.find((field)=>field === $e29047879edbebee$export$885291568461564a);
        if (restOfFieldsField) fieldset.fields.splice(fieldset.fields.indexOf(restOfFieldsField), 1, ...allFormFields);
        return fieldset;
    });
    return /*#__PURE__*/ (0, $kAGeC$jsx)("div", {
        className: "application-form",
        children: /*#__PURE__*/ (0, $kAGeC$jsx)((0, $85a82239aebedd0d$export$a92f85ab3e9ad68b).Provider, {
            value: {
                ...(0, $85a82239aebedd0d$export$3f655c770124f5e3),
                ...config
            },
            children: /*#__PURE__*/ (0, $kAGeC$jsxs)((0, $163a5ab7286b1d28$export$a7fed597f4b8afd8), {
                onSubmit: handleSubmit,
                children: [
                    allFieldsets.map((fieldset, index)=>/*#__PURE__*/ (0, $kAGeC$jsx)((0, $c9252567ca2cc175$export$e154be390aa0e14), {
                            name: fieldset.name,
                            children: fieldset.fields.filter(({ name: name  })=>Boolean(name)).map((field)=>/*#__PURE__*/ (0, $kAGeC$jsx)((0, $5f97fa913381518e$export$a455218a85c89869), {
                                    name: field.name,
                                    field: field
                                }, field.name))
                        }, fieldset.name || fieldset.fields[0]?.name || index)),
                    /*#__PURE__*/ (0, $kAGeC$jsx)((0, $c9252567ca2cc175$export$e154be390aa0e14), {
                        children: /*#__PURE__*/ (0, $kAGeC$jsx)((0, $0f0ded933cb6fec6$export$564cbe3426fc093a), {
                            children: /*#__PURE__*/ (0, $kAGeC$jsx)((0, $44aa9bf139b40f61$export$353f5b6fc5456de1), {
                                type: "submit",
                                size: "lg",
                                style: {
                                    width: "100%"
                                },
                                children: config.labelSubmit || (0, $85a82239aebedd0d$export$3f655c770124f5e3).labelSubmit
                            })
                        })
                    })
                ]
            })
        })
    });
};




export {$e29047879edbebee$export$60413e28724d3abd as ApplicationForm};
//# sourceMappingURL=modern.main.js.map
