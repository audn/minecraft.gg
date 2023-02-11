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
        <div className="fixed z-50 flex items-center justify-center w-full min-h-screen">
          <div className="absolute inset-0 z-10 bg-types-50/90 backdrop-blur-sm" />

          <div className="z-20 flex flex-col items-center justify-center w-full max-w-xl p-5 py-12 space-y-8 text-center content-border bg-types-100 ">
            <h1 className="text-4xl shadow font-ten text-types-yellow">
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
