// The import order DOES MATTER here. If you change it, you'll get an error!
// The import order DOES MATTER here. If you change it, you'll get an error!

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {

  return (
    <Main
      meta={
        <Meta
          title="Event Calendar"
          description="Event Calendar for factorial"
        />
      }
    >
      
     
    </Main>
  );
};

export default Index;
