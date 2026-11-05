let compTypeDesktop;
let compTypeLaptop;
let macAddress;
let serialNumber;
let make;
let model;
let memory;
let storage;
let ports;
let isShipped;
let isRecieved;
let submitButton;
let caseSize;
let cpu;
let gpu;
let psu;
let coolingSystem;
let donorFName;
let donorLName;
let donorEmail;
let dateRecieved;

let subStatus;
let subStatusText;


document.addEventListener("DOMContentLoaded", () => {
    // Computer Information
    compTypeDesktop = document.getElementById("desktop");
    compTypeLaptop = document.getElementById("laptop");
    macAddress = document.getElementById("macAddress");
    serialNumber = document.getElementById("serialNumber");
    make = document.getElementById("make");
    model = document.getElementById("model");
    memory = document.getElementById("memory");
    storage = document.getElementById("storage");
    ports = document.getElementById("ports");
    isShipped = document.getElementById("shipped");
    isRecieved = document.getElementById("received");
    submitButton = document.getElementById("subButton");

    // Desktop Specifications
    caseSize = document.getElementById("caseSize");
    cpu = document.getElementById("cpu");
    gpu = document.getElementById("gpu");
    psu = document.getElementById("psu");
    coolingSystem = document.getElementById("coolingSystem");

    // Donor Information
    donorFName = document.getElementById("donorFName");
    donorLName = document.getElementById("donorLName");
    donorEmail = document.getElementById("donorEmail");
    dateRecieved = document.getElementById("dateRecieved");

    subStatus = document.getElementById("sub-status");
    subStatusText = document.getElementById("sub-status-text");



    // Validate when the submit button is clicked
    if (submitButton) {
        const form = submitButton.closest("form");

        if (form) {
            form.addEventListener("submit", (event) => {
                if (!submitForm()) {
                    event.preventDefault();
                }
            });
        } else {
            submitButton.addEventListener("click", (event) => {
                if (!submitForm()) {
                    event.preventDefault();
                }
            });
        }
    }
});

// Computer Type Validation
function valCompType() {
    return compTypeDesktop.checked || compTypeLaptop.checked;
}

// MAC Address Validation
function valMacAddress() {
    return macAddress.value.trim() !== "";
}

// Serial Number Validation
function valSerialNumber() {
    return serialNumber.value.trim() !== "";
}

// Make Validation
function valMake() {
    return make.value.trim() !== "";
}

// Model Validation
function valModel() {
    return model.value.trim() !== "";
}

// Memory Validation
function valMemory() {
    const value = Number(memory.value);

    return memory.value.trim() !== "" &&
           Number.isInteger(value) &&
           value > 0;
}

// Storage Validation
function valStorage() {
    const value = Number(storage.value);

    return storage.value.trim() !== "" &&
           Number.isInteger(value) &&
           value > 0;
}

// Ports Validation
function valPorts() {
    const value = Number(ports.value);

    return ports.value.trim() !== "" &&
           Number.isInteger(value) &&
           value >= 0;
}

// Case Size Validation
function valCaseSize() {
    switch (caseSize.value.trim().toLowerCase()) {
        case "atx":
        case "micro atx":
        case "mini itx":
        case "extended atx":
            return true;

        default:
            return false;
    }
}

// CPU Validation
function valCpu() {
    return cpu.value.trim() !== "";
}

// GPU Validation
function valGpu() {
    return gpu.value.trim() !== "";
}

// PSU Validation
function valPsu() {
    return psu.value.trim() !== "";
}

// Cooling System Validation
function valCooling() {
    switch (coolingSystem.value.trim().toLowerCase()) {
        case "water":
        case "air":
        case "fans":
            return true;

        default:
            return false;
    }
}

// Donor First Name Validation
function valFName() {
    return donorFName.value.trim() !== "";
}

// Donor Last Name Validation
function valLName() {
    return donorLName.value.trim() !== "";
}

// Donor Email Validation
function valEmail() {
    const email = donorEmail.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}

// Date Received Validation
function valDateRecieved() {
    return dateRecieved.value.trim() !== "" &&
           !Number.isNaN(new Date(dateRecieved.value).getTime());
}

// Form Submission Validation
function submitForm() {
    let valid = true;
    let errorMessage;

    switch (true) {
        case !valCompType():
            errorMessage = "Must select Computer type!"
            valid = false;
            break;

        case !valMacAddress():
            errorMessage = "Must enter MAC Address!";
            valid = false;
            break;

        case !valSerialNumber():
            errorMessage = "Must enter serial number!";
            valid = false;
            break;

        case !valMake():
            errorMessage = "Must enter make!";
            valid = false;
            break;

        case !valModel():
            errorMessage = "Must enter model!";
            valid = false;
            break;

        case !valStorage():
            errorMessage = "Must enter valid storage number in GB!";
            valid = false;
            break;

        case !valMemory():
            errorMessage = "Must enter valid memory number in GB!";
            valid = false;
            break;

        case !valPorts():
            errorMessage = "Must enter valid number of ports!";
            valid = false;
            break;

        case !valCaseSize():
            errorMessage = "Must enter valid case size!";
            valid = false;
            break;

        case !valCpu():
            errorMessage = "Must enter CPU!";
            valid = false;
            break;

        case !valGpu():
            errorMessage = "Must enter GPU!";
            valid = false;
            break;

        case !valPsu():
            errorMessage = "Must enter PSU!";
            valid = false;
            break;

        case !valCooling():
            errorMessage = "Must enter valid cooling system!";
            valid = false;
            break;

        case !valFName():
            errorMessage = "Must enter donor's first name!";
            valid = false;
            break;

        case !valLName():
            errorMessage = "Must enter donor's last name!";
            valid = false;
            break;

        case !valEmail():
            errorMessage = "Must enter a valid donor email address!";
            valid = false;
            break;
        
        case !valDateRecieved():
            errorMessage = "Must enter a valid date received!";
            valid = false;
            break;

        default:
            valid = true;
            break;
    }

    if(valid){
        subStatusText.innerHTML = "Submitted Successfully!"
        subStatusText.style.color = "var(--success-color)"
    }
    else{
        subStatusText.innerHTML = "Error while trying to submit! <br />" + errorMessage
        subStatusText.style.color = "var(--error-color)"
    }

    subStatus.style.display = "flex"

    return valid;
}