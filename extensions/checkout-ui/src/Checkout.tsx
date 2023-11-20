import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  return (
    <div className="">
    <Banner title="checkout-ui">
      {translate('welcome', {target: extension.target})}
    </Banner>
    <div className="">Hello guys, this is a checkout-ui extensions.</div>
    </div>
  );
}