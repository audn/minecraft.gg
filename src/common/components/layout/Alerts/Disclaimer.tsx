import { GetStaticPaths, GetStaticProps } from 'next';
import { Button } from '../../Buttons';
import Text from '../headings/Text';

function DisclaimerAlert({
  onClick,
  open,
}: {
  onClick: () => void;
  open: boolean;
}) {
  return (
    <div>
      {open && (
        <div className="flex items-center justify-center min-h-screen w-full fixed z-50">
          <div className="bg-types-50/90 backdrop-blur-sm inset-0 z-10 absolute" />

          <div className="content-border bg-types-100 z-20 p-5 py-12 max-w-xl w-full text-center flex flex-col space-y-8 justify-center items-center ">
            <h1 className="text-4xl font-ten text-types-yellow shadow">
              disclaimer
            </h1>
            <Text className="font-minecraft leading-8 !text-xl">
              <p className="text-white ">
                This website is not approved by <br />
                or associated with Mojang.
              </p>
            </Text>
            <Button.Primary onClick={onClick} title="Got it!" />
          </div>
        </div>
      )}
    </div>
  );
}

export default DisclaimerAlert;
export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = (ctx.params?.bot || '') as string[] | string;
  const getSlug = slug.length > 1 ? slug[0] : (slug as string);
  const getTab = slug.length > 1 ? slug[1] : 'Overview';

  //   const data = await getBotBySlug(getSlug);

  //   if (!data) {
  //     return {
  //       notFound: true,
  //       revalidate: 10,
  //     };
  //   }

  return {
    props: { user: {} },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = () =>
  Promise.resolve({ paths: [], fallback: 'blocking' });
