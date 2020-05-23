import React from 'react';
import Image from '../components/Image';
import {Box} from 'reflexbox';

export default function ProfilePage() {
  return (
    <>
      <div>
          <Box
              as={Image}
              src='https://im0-tub-ru.yandex.net/i?id=48ac536c899eff440e5f41fe226bd070&n=13&exp=1'
              css={`
              width: 280px;
              height: 200px;
              `}
          />
      </div>
    </>
  );
}
