<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class KanbanTest extends DuskTestCase
{
    public function test_park_ui_kanban_loads_correctly(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/kanban/park-ui')
                    ->waitForText('Project Kanban Board', 15)
                    ->screenshot('kanban-park-ui')
                    ->assertSee('Drag and drop tasks')
                    ->assertSee('To Do')
                    ->assertSee('In Progress')
                    ->assertSee('Done')
                    ->assertSee('Design new landing page');

            // Check for console errors
            $logs = $browser->driver->manage()->getLog('browser');
            $errors = array_filter($logs, fn($log) => $log['level'] === 'SEVERE');

            file_put_contents(storage_path('logs/park-ui-console.json'), json_encode($logs, JSON_PRETTY_PRINT));

            if (!empty($errors)) {
                file_put_contents(storage_path('logs/park-ui-errors.json'), json_encode($errors, JSON_PRETTY_PRINT));
            }

            $this->assertEmpty($errors, 'Console errors found - check storage/logs/park-ui-errors.json');
        });
    }

    public function test_mantine_kanban_loads_correctly(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/kanban/mantine')
                    ->waitForText('Project Kanban Board', 15)
                    ->screenshot('kanban-mantine')
                    ->assertSee('Drag and drop tasks')
                    ->assertSee('To Do')
                    ->assertSee('In Progress')
                    ->assertSee('Done')
                    ->assertSee('Design new landing page');

            // Check for console errors
            $logs = $browser->driver->manage()->getLog('browser');
            $errors = array_filter($logs, fn($log) => $log['level'] === 'SEVERE');

            if (!empty($errors)) {
                file_put_contents(storage_path('logs/mantine-errors.json'), json_encode($errors, JSON_PRETTY_PRINT));
            }

            $this->assertEmpty($errors, 'Console errors found - check storage/logs/mantine-errors.json');
        });
    }

    public function test_chakra_ui_kanban_loads_correctly(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/kanban/chakra-ui')
                    ->waitForText('Project Kanban Board', 15)
                    ->screenshot('kanban-chakra-ui')
                    ->assertSee('Drag and drop tasks')
                    ->assertSee('To Do')
                    ->assertSee('In Progress')
                    ->assertSee('Done')
                    ->assertSee('Design new landing page');

            // Check for console errors
            $logs = $browser->driver->manage()->getLog('browser');
            $errors = array_filter($logs, fn($log) => $log['level'] === 'SEVERE');

            if (!empty($errors)) {
                file_put_contents(storage_path('logs/chakra-ui-errors.json'), json_encode($errors, JSON_PRETTY_PRINT));
            }

            $this->assertEmpty($errors, 'Console errors found - check storage/logs/chakra-ui-errors.json');
        });
    }

    public function test_kanban_index_loads_correctly(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/kanban')
                    ->waitForText('Kanban Board UI Library Comparison', 15)
                    ->screenshot('kanban-index')
                    ->assertSee('Park UI')
                    ->assertSee('Mantine')
                    ->assertSee('Chakra UI');

            // Check for console errors
            $logs = $browser->driver->manage()->getLog('browser');
            $errors = array_filter($logs, fn($log) => $log['level'] === 'SEVERE');

            if (!empty($errors)) {
                file_put_contents(storage_path('logs/kanban-index-errors.json'), json_encode($errors, JSON_PRETTY_PRINT));
            }

            $this->assertEmpty($errors, 'Console errors found - check storage/logs/kanban-index-errors.json');
        });
    }
}
