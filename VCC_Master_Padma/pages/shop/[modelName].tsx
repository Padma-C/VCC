import { useRouter } from 'next/router';
import { View } from 'vcc-ui';
import { Block } from 'vcc-ui';
import { Logo } from 'vcc-ui';
import styles from '../../styles/Home.module.css';

const shop = () => {
  const router = useRouter();
  const { modelName } = router.query;
  return (
    <>
      <Block
        as="h3"
        extend={{
          padding: 0,
          margin: 0,
          color: 'white',
          textShadow: '1px 1px 1px green',
          fontFamily: 'Helvetica Neue, Arial',
          background: '#fafafa',
        }}
      >
        <View padding={6}>
          <Logo type="spreadmark" height={8} />
        </View>{' '}
      </Block>
      <View>
        <div className={styles.description}>Shop</div>
        <h1 className={styles.title}>{modelName} </h1>
      </View>
    </>
  );
};

export default shop;
