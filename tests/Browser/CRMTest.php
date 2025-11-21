<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class CRMTest extends DuskTestCase
{
    /**
     * Test that CRM Mantine page loads successfully
     */
    public function testMantineCRMPageLoads(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/crm/mantine')
                    ->waitForText('Sarah Chen', 30)
                    ->assertSee('Sarah Chen')
                    ->assertSee('VP of Engineering')
                    ->assertSee('TechCorp Solutions')
                    ->assertSee('Total Deals')
                    ->assertSee('$145,000')
                    ->assertSee('Open Tasks')
                    ->assertSee('Email')
                    ->assertSee('SMS')
                    ->assertSee('WhatsApp')
                    ->assertSee('Deals & Opportunities')
                    ->assertSee('Enterprise License Q1')
                    ->assertSee('$85,000');
        });
    }

    /**
     * Test that CRM Ant Design page loads successfully
     */
    public function testAntDesignCRMPageLoads(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/crm/ant-design')
                    ->waitForText('Sarah Chen', 30)
                    ->assertSee('Sarah Chen')
                    ->assertSee('VP of Engineering')
                    ->assertSee('TechCorp Solutions')
                    ->assertSee('Total Deals')
                    ->assertSee('$145,000')
                    ->assertSee('Open Tasks')
                    ->assertSee('Email')
                    ->assertSee('SMS')
                    ->assertSee('WhatsApp')
                    ->assertSee('Deals & Opportunities')
                    ->assertSee('Enterprise License Q1')
                    ->assertSee('$85,000');
        });
    }

    /**
     * Test that CRM Mantine page modals work
     */
    public function testMantineEmailModalOpens(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/crm/mantine')
                    ->waitForText('Sarah Chen', 30)
                    ->click('button:contains("Email")')
                    ->pause(500)
                    ->assertSee('Compose Email')
                    ->assertSee('Subject');
        });
    }

    /**
     * Test that CRM Ant Design page modals work
     */
    public function testAntDesignEmailModalOpens(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/crm/ant-design')
                    ->waitForText('Sarah Chen', 30)
                    ->click('button:contains("Email")')
                    ->pause(500)
                    ->assertSee('Compose Email')
                    ->assertSee('Subject');
        });
    }
}
