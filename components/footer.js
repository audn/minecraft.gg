function Footer() {
  return (
    <footer className="bg-default-200 mt-16">
      <ul className="text-color-200 container flex items-center justify-between mx-auto text-sm p-4">
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
          <a target="_blank" className="mr-12 cursor-pointer">
            Contact / Feedback
          </a>{' '}
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
