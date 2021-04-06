import React from 'react'
import PropTypes from 'prop-types'

import { Layout, PageHeader, PageHelmet } from '@components/common'
export default function PollNotAvailable({ status, uid }) {
    //     if (status === 'Upcoming') {
    //         return 'Upcoming!'
    //     }
    //
    //     if (status === 'Complete') {
    //         return 'Complete!'
    //     }

    return (
        <main id='main'>
            <PageHelmet title='Coming soon!' url={uid} />
            <Layout id='poll-not-available'>
                <PageHeader
                    description='This is a test'
                    isH1={true}
                    title='Coming soon!'
                />
            </Layout>
        </main>
    )
}

PollNotAvailable.propTypes = {
    status: PropTypes.string,
    uid: PropTypes.string,
}
