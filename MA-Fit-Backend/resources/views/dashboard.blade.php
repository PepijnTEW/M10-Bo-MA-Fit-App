<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800">
            CMS Dashboard
        </h2>
    </x-slot>

    <div class="py-6">
        <div class="max-w-7xl mx-auto space-y-4">

            <div class="p-4 bg-white shadow rounded">
                <h3 class="text-lg font-bold">Beheer</h3>

                <ul class="list-disc ml-6">
                    <li>
                        <a href="{{ route('cms.pillars.index') }}" class="text-blue-600 underline">
                            Pillars beheren
                        </a>
                    </li>
                    {{-- later: users, challenges, etc --}}
                </ul>
            </div>

        </div>
    </div>
</x-app-layout>
