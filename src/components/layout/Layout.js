import { Button, CardWrapper, Card, Icon, Input, IconButton, NumberInput } from '../ui';
import * as Icons from '../icons';
import styles from './layout.module.scss';
import { Modal } from '../ui/Modal/Modal';
import { Menu } from '../ui/Menu/Menu';

function Layout({ darkMode }) {
    return (
        <div className={styles.layout}>
            <div className={styles.appbar}>
                <div className={styles.appbarWrapper}>
                    <div className={styles.logo}>Parallel UI</div>
                    <nav className={styles.nav}>
                        {/* <ul>
                            <li><a href='/'>Menu Item 1</a></li>
                            <li><a href='/'>Menu Item 2</a></li>
                            <li><a href='/'>Menu Item 3</a></li>
                        </ul> */}
                    </nav>
                </div>
            </div>

            <div className={styles.main}>
                {/* <CardWrapper>
                    <Card title='Components'> */}
                <div>
                    <br />
                    <Button label={'TOGGLE THEME'} onClick={darkMode.toggle} />
                    <br />
                    <br />
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Excepturi quas, perspiciatis
                        autem ab nostrum dolores minus molestias eaque!
                    </p>
                    <p><a href='/storybook'>Go to Storybook 🔗</a></p>
                    <br /><br /><br /><br />

                    <div style={{
                        marginRight: '8px',
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <NumberInput
                            labelText='Number Input'
                            helperText='max: 50, step: 5'
                            placeholder='Number Input'
                            max='50'
                            step={'5'}
                        />
                        <Input
                            type='text'
                            labelText='Text input label'
                            helperText='Optional help text'
                            placeholder='Placeholder text'
                            icon={<Icons.Search />}
                            clearable
                        />

                        <Input
                            type='text'
                            helperText='Optional help text'
                            placeholder='Placeholder text'
                            icon={<Icons.Search />}
                            danger
                            invalidText='Invalid text'
                        />

                        <Input
                            type='text'
                            labelText='Success text input'
                            helperText='Optional help text'
                            placeholder='Placeholder text'
                            icon={<Icons.Verified />}
                            success
                        />

                        <Input
                            type='text'
                            labelText='Warning text input'
                            helperText='Optional help text'
                            placeholder='Placeholder text'
                            icon={<Icons.Warning />}
                            warning
                        />

                        <IconButton
                            icon={<Icons.HeartFill />}
                            rounded
                        />

                        <IconButton
                            icon={<Icons.StarFill />}
                        /* style={{ fontSize: '3rem' }} */
                        />

                        <Icon icon='HeartFill' />

                        <Button label={'PRIMARY'} />
                        <Button label={'OUTLINED'} icon={<Icons.HeartFill />} variant='outlined' theme='danger' />
                        <Button label={'TEXT'} icon={<Icons.HeartFill />} variant='text' theme='success' />
                        <Button label={'DISABLED'} disabled icon={<Icons.StarFill />} />
                        <Button label={'Loading'} isLoading icon={<Icons.HeartFill />} />
                        <Button label={'ICON'} icon={<Icons.Verified />} />
                        <Button label={'DANGER'} icon={<Icons.Verified />} theme='danger'
                            onClick={() => { console.log('this is danger') }} />
                        <Button label={'SUCCESS'} icon={<Icons.Verified />} theme='success' />
                        <Button label={'WARNING'} icon={<Icons.Verified />} theme='warning' />
                        <Button label='GradIent' variant='gradient' />
                    </div>
                    <Modal isOpen={false}>
                        <Button label={'SUCCESS'} icon={<Icons.Verified />} theme='success' />
                        <Button label={'WARNING'} icon={<Icons.Verified />} theme='warning' />
                    </Modal>
                </div>
                <br />
                <Menu></Menu>
                {/* </Card>
                </CardWrapper> */}
            </div>
        </div >
    )
}

export default Layout;
