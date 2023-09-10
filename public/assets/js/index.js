window.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form')

    function togglePassword() {

        const passwordIcon = document.querySelectorAll('.toggle-password')
        const passwordInput = document.querySelector('#password')

        passwordIcon.forEach(icon => {
            
            icon.addEventListener('click', () => {

                passwordIcon.forEach(icon => icon.classList.toggle('hide'))

                if(passwordInput.getAttribute('type') === 'password') {
                    passwordInput.setAttribute('type', 'text')
                    return
                }

                passwordInput.setAttribute('type', 'password')
            })
        })

    }

    function validation(event) {

        event.preventDefault()

        const fields = document.querySelectorAll('input')
        const errorMessage = document.querySelectorAll('.error-message')

        const patterns = {
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        } 

        fields.forEach((field, index) => {

            const fieldName = field.getAttribute('name')

            if(!field.value) {
                errorMessage[index].classList.remove('hide')
                errorMessage[index].textContent = `Empty ${fieldName}`
                field.classList.add('error')
                return
            }

            if(patterns.hasOwnProperty(fieldName)) {
             
                if(!patterns[fieldName].test(field.value)) {
                    errorMessage[index].textContent = `Invalid ${fieldName}`
                    field.classList.add('error')
                    errorMessage[index].classList.remove('hide')
                    return
                }
      
            }
            
            field.classList.remove('error')
            errorMessage[index].classList.add('hide')
        })


    }

    togglePassword()
    form.addEventListener('submit', (event) => validation(event))
})