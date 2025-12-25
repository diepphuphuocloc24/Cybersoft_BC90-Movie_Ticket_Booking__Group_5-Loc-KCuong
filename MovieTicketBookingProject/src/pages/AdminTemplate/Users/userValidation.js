export const validateUser = (values, isEditMode) => {
    const errors = {};

    if (!values.taiKhoan) {
        errors.taiKhoan = "Username is required";
    }

    if (!values.hoTen) {
        errors.hoTen = "Full name is required";
    }

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.soDt) {
        errors.soDt = "Phone number is required";
    } else if (!/^\d+$/.test(values.soDt)) {
        errors.soDt = "Phone number must contain only digits";
    }

    if (!isEditMode) {
        if (!values.matKhau) {
            errors.matKhau = "Password is required";
        } else if (values.matKhau.length < 6) {
            errors.matKhau = "Password must be at least 6 characters";
        }
    }

    return errors;
};