import Swal from 'sweetalert2';
function Footer() {
  const feedback = () => {
    return Swal.fire({
      title: 'Get in touch!',
      type: 'info',
      html:
        '<div class="text-left text-md mb-16">' +
        'Please remember that this site is in no way affiliated with Microsoft or Mojang.</div> ' +
        '<form class="mt-8" name="Message" method="POST" netlify  data-netlify="true"><input type="hidden" name="form-name" className="focus:border-none" value="Message"><div class="flex items-center mb-4"><label class="text-grey-darker pr-4 w-1/4" for="input-name">Your Name</label> <input type="text" id="input-name" class="w-3/4 bg-default-100 px-6 py-4 text-grey-darkest" placeholder="John Doe" required="" name="name"></div><div class="flex items-center mb-4"><label class="text-grey-darker pr-4 w-1/4" for="input-email">Your Email</label> <input type="email" id="input-email" class="w-3/4 bg-default-100 px-6 py-4 text-grey-darkest" placeholder="john.doe@example.com" required="" name="email"></div><div class="flex items-center pb-6 mb-6"><label class="text-grey-darker pr-4 w-1/4" for="input-message">Your Message</label> <textarea id="input-message" name="message" class="w-3/4 bg-default-100 px-6 py-4 text-grey-darkest" placeholder="Your message here!" autocomplete="on" rows="4"></textarea></div><div class="block"><button type="submit" class="rounded-lg no-underline bg-default-blue text-white tracking-wide font-noodle text-center px-6 py-4 mx-auto block antialiased">Submit</button></div></form>',
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
      showCConfirmButton: false,
      focusConfirm: false,
    });
  };

  return (
    <footer className="bg-default-200 mt-16">
      <ul className="text-color-200 container flex items-center justify-between mx-auto text-sm text-white p-4">
        <li>
          Created by{' '}
          <a
            href="https://twitter.com/tweetaudun"
            target="_blank"
            className="underline"
          >
            Audun Hilden
          </a>
        </li>

        <li>
          <a
            target="_blank"
            className="mr-12 cursor-pointer"
            onClick={feedback}
          >
            Contact / Feedback
          </a>{' '}
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
