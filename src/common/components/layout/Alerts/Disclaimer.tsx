import { Button } from '../../Buttons';
import Text from '../headings/Text';

function DisclaimerAlert({ onClick }: { onClick: () => void }) {
  return (
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
  );
}

export default DisclaimerAlert;
