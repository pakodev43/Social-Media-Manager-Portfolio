
document.querySelector('[ data-head-title ]').textContent = data.Title
document.querySelector('[ data-heading ]').textContent = data.Title
document.querySelector('[ data-footer-name ]').textContent = data.Title
document.querySelector('[ data-head-description ]').content = data.Site_description
document.querySelector('[ data-head-keywords ]').content = data.Site_keywords


document.querySelector('[ data-tagline ]').textContent = data.Tagline
document.querySelector('[ data-skills ]').textContent = data.Skills


document.querySelector('[ data-phone-number ]').textContent = data.Phone_number
document.querySelector('[ data-email ]').textContent = data.Email

document.querySelector('[ data-footer-phone-number ]').textContent = data.Phone_number
document.querySelector('[ data-footer-email ]').textContent = data.Email

document.querySelector('[ data-footer-phone-number-href ]').href = "tel:" + data.Phone_number
document.querySelector('[ data-footer-email-href ]').href = "mailto:" + data.Email



document.querySelector('[ data-services-1-title ]').textContent = data.Service_1_title
document.querySelector('[ data-services-1-text ]').textContent = data.Service_1_text

document.querySelector('[ data-services-2-title ]').textContent = data.Service_2_title
document.querySelector('[ data-services-2-text ]').textContent = data.Service_2_text

document.querySelector('[ data-services-3-title ]').textContent = data.Service_3_title
document.querySelector('[ data-services-3-text ]').textContent = data.Service_3_text

document.querySelector('[ data-services-4-title ]').textContent = data.Service_4_title
document.querySelector('[ data-services-4-text ]').textContent = data.Service_4_text

document.querySelector('[ data-services-5-title ]').textContent = data.Service_5_title
document.querySelector('[ data-services-5-text ]').textContent = data.Service_5_text

document.querySelector('[ data-services-6-title ]').textContent = data.Service_6_title
document.querySelector('[ data-services-6-text ]').textContent = data.Service_6_text



document.querySelector('[ data-social-link-linkedin ]').href = data.Linkedin_profile_link
document.querySelector('[ data-social-link-instagram ]').href = data.Instagram_profile_link
document.querySelector('[ data-social-link-x ]').href = data.X_profile_link
document.querySelector('[ data-social-link-facebook ]').href = data.Facebook_profile_link

document.querySelector('[ data-footer-social-link-linkedin ]').href = data.Linkedin_profile_link
document.querySelector('[ data-footer-social-link-instagram ]').href = data.Instagram_profile_link
document.querySelector('[ data-footer-social-link-x ]').href = data.X_profile_link
document.querySelector('[ data-footer-social-link-facebook ]').href = data.Facebook_profile_link